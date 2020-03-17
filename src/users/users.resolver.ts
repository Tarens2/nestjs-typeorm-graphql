import {
  ResolveProperty,
  Query,
  Args,
  Parent,
  Resolver,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { TeamsService } from '../teams/teams.service';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/grql-auth.guard';
import { CurrentUser } from '../decorators/current-user';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
  ) {}

  @Query('getUser')
  async getUser(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Query('getUsers')
  async getUsers() {
    return this.usersService.findAll({ relations: ['team'] });
  }

  @ResolveProperty('team')
  async team(@Parent() user) {
    return user.team;
  }

  @Query('getMe')
  @UseGuards(GqlAuthGuard)
  getMe(@CurrentUser() user: User) {
    return this.usersService.findOne(user.id);
  }
}
