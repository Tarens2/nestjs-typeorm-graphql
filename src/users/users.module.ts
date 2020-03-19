import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './user.entity';
import { TeamsModule } from '../teams/teams.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => TeamsModule),
    forwardRef(() => AuthModule),
  ],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
