import {
  ResolveProperty,
  Query,
  Args,
  Parent,
  Resolver,
} from '@nestjs/graphql';
import { TeamsService } from './teams.service';
import { TeamGql } from './team.gql';
import { UsersService } from 'src/users/users.service';

@Resolver(() => TeamGql)
export class TeamsResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
  ) {}

  @Query(() => TeamGql)
  async getTeam(@Args('id') id: number): Promise<TeamGql> {
    return this.teamsService.findOne(id);
  }

  // @Query(() => [TeamGql])
  // async getTeams(): Promise<TeamGql[]> {
  //   return this.teamsService.findAll({ relations: ['users'] });
  // }

  // @ResolveProperty('users')
  // async team(@Parent() team) {
  //   return team.users;
  // }
}
