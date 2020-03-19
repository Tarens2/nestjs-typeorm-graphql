import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { Team } from '../teams/team.entity';
import * as bcrypt from 'bcrypt';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({
    nullable: true,
  })
  firstName: string;

  @Field()
  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({
    nullable: true,
  })
  lastName: string;

  @Field({ nullable: true })
  @Column({
    nullable: true,
  })
  age: number;

  @Field(() => Team)
  @ManyToOne(
    () => Team,
    team => team.users,
  )
  team: Team;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
