import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Team } from '../teams/team.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class GameSession {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    unique: true,
  })
  name: string;

  @Field(() => Team)
  @OneToOne(
    () => Team,
    team => team.gameSession,
  )
  dire: Team;

  @Field(() => Team)
  @OneToOne(
    () => Team,
    team => team.gameSession,
  )
  radiant: Team;
}
