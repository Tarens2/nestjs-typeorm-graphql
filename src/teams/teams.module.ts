import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsService } from './teams.service';
import { Team } from './team.entity';
import { TeamsResolver } from './teams.resolver';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), forwardRef(() => UsersModule)],
  exports: [TypeOrmModule, TeamsService],
  providers: [TeamsService, TeamsResolver],
})
export class TeamsModule {}
