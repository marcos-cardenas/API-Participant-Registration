import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AttendeesModule } from '../attendees/attendees.module';

@Module({
  imports: [AttendeesModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
