import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { UserGql } from '../users/user.gql';

@ObjectType()
export class TeamGql {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  // @Field(() => [UserGql])
  // users: UserGql[];
}
