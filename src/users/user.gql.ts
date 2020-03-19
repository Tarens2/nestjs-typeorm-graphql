import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@ObjectType()
export class UserGql {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  age: number;

  // @ManyToOne(
  //   () => Team,
  //   team => team.users,
  // )
  // team: Team;
}

@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginOutput {
  @Field()
  accessToken: string;
}
