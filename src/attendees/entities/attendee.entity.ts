import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('attendees')
export class Attendee {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('varchar', {
    unique: true,
  })
  email: string;
  @Column('varchar')
  fullName: string;
  @Column('bool')
  isVip: boolean;
  @Column('datetime')
  registrationDate: Date;

  @BeforeInsert()
  private setRegistrationDate() {
    this.registrationDate = new Date();
  }
}
