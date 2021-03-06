import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GameSession } from '../game-session/game-session.entity';

@ObjectType()
@Entity()
export class Team {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  name: string;

  @Field(() => [User])
  @OneToMany(
    () => User,
    user => user.team,
  )
  users: User[];

  @Field(() => GameSession)
  @OneToOne(
    () => GameSession,
    game => game.dire || game.radiant,
  )
  gameSession: GameSession;
}
