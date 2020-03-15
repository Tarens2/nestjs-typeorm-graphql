import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from '../teams/team.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({
    unique: true
  })
  username: string;

  @Column()
  password: string

  @Column()
  lastName: string;

  @Column()
  age: number;

  @ManyToOne(
    () => Team,
    team => team.users,
  )
  team: Team;
}
