import {
  ResolveProperty,
  Query,
  Args,
  Parent,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { TeamsService } from './teams.service';
import { Team } from './team.entity';
import { UsersService } from 'src/users/users.service';
import { User } from '../users/user.entity';

@Resolver(() => Team)
export class TeamsResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
  ) {}

  @Query(() => Team)
  async getTeam(@Args('id') id: number): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  @Query(() => [Team])
  async getTeams() {
    return this.teamsService.findAll({ relations: ['users'] });
  }

  @ResolveField(() => [User])
  async team(@Parent() team) {
    return team.users;
  }
}
