import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

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
}
