import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './user.entity';
import { TeamsModule } from '../teams/teams.module';
import { AuthModule } from '../auth/auth.module';
import { GameSessionModule } from '../game-session/game-session.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => TeamsModule),
    forwardRef(() => AuthModule),
    forwardRef(() => GameSessionModule),
  ],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
