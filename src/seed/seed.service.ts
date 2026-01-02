import { Injectable } from '@nestjs/common';

import { initialData } from './data/seed-data';
import { AttendeesService } from '../attendees/attendees.service';
import { Attendee } from '../attendees/entities/attendee.entity';
@Injectable()
export class SeedService {
  constructor(private readonly attendeesService: AttendeesService) {}

  async runSeed() {
    await this.insertNewAttendees();
    return `SEED Executed`;
  }

  private async insertNewAttendees() {
    await this.attendeesService.deleteAllAttendees();
    const attendees = initialData.attendees;
    const insertPromises: Promise<Attendee | undefined>[] = [];
    attendees.forEach((attendee) => {
      insertPromises.push(this.attendeesService.create(attendee));
    });
    await Promise.all(insertPromises);
    return true;
  }
}
