/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAttendeeDto, UpdateAttendeeDto } from './dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Attendee } from './entities/attendee.entity';

@Injectable()
export class AttendeesService {
  private readonly logger = new Logger('AttendeesService');
  constructor(
    @InjectRepository(Attendee)
    private readonly attendeeRepository: Repository<Attendee>,
  ) {}
  async create(createAttendeeDto: CreateAttendeeDto) {
    try {
      const attendee = this.attendeeRepository.create(createAttendeeDto);
      await this.attendeeRepository.save(attendee);
      return attendee;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, page = 1 } = paginationDto;
    const attendees = await this.attendeeRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await this.attendeeRepository.count();
    const lastPage = Math.ceil(total / limit);
    return {
      data: attendees,
      meta: { total, page, lastPage },
    };
  }

  async findOne(id: string) {
    const attendee = await this.attendeeRepository.findOneBy({ id });
    if (!attendee)
      throw new NotFoundException(`The assistant with ID #${id} was not found`);
    return attendee;
  }

  async update(id: string, updateAttendeeDto: UpdateAttendeeDto) {
    delete updateAttendeeDto.email;
    const attendee = await this.attendeeRepository.preload({
      id,
      ...updateAttendeeDto,
    });

    if (!attendee)
      throw new NotFoundException(`The assistant with ID #${id} was not found`);
    try {
      await this.attendeeRepository.save(attendee);
      return attendee;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const attendee = await this.findOne(id);
    await this.attendeeRepository.remove(attendee);
  }

  private handleDBExceptions(error: any) {
    if (error.sqlState === '23000')
      throw new ConflictException(error.sqlMessage);
    this.logger.error(error.sqlMessage);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  async deleteAllAttendees() {
    const query = this.attendeeRepository.createQueryBuilder();
    try {
      await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
