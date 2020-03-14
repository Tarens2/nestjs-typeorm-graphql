import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';
import { User } from './user.entity';
import { TeamsModule } from '../teams/teams.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => TeamsModule)],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService, UsersResolver],
  controllers: [UsersController],
})
export class UsersModule {}
