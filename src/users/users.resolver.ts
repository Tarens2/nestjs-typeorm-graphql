import {
  ResolveProperty,
  Query,
  Args,
  Parent,
  Resolver,
  Mutation,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { GqlAuthGuard, GqlLocalAuthGuard } from '../auth/grql-auth.guard';
import { CurrentUser } from '../decorators/current-user';
import { AuthService } from '../auth/auth.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Mutation('createUser')
  async createUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return this.usersService.create(username, password);
  }

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
  getMe(@CurrentUser() user) {
    return this.usersService.findByUsername(user.username);
  }

  @Query('login')
  @UseGuards(GqlLocalAuthGuard)
  async login(_: never, user: { username: string; password: string }) {
    return this.authService.login(user);
  }
}
