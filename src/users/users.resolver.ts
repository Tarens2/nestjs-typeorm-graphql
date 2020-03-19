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
import { LoginInput, LoginOutput, UserGql } from './user.gql';
import { TeamGql } from '../teams/team.gql';

@Resolver(() => UserGql)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => UserGql)
  async createUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return this.usersService.create(username, password);
  }

  @Query(() => UserGql)
  async getUser(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Query(() => [UserGql])
  async getUsers() {
    return this.usersService.findAll({ relations: ['team'] });
  }

  @ResolveProperty(() => TeamGql)
  async team(@Parent() user) {
    return user.team;
  }

  @Query(() => UserGql)
  @UseGuards(GqlAuthGuard)
  getMe(@CurrentUser() user) {
    return this.usersService.findByUsername(user.username);
  }

  @Query(() => LoginOutput)
  @UseGuards(GqlLocalAuthGuard)
  async login(@Args('user') loginInput: LoginInput): Promise<LoginOutput> {
    return this.authService.login(loginInput);
  }
}
