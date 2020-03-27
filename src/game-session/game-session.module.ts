import { Module } from '@nestjs/common';
import { GameSessionService } from './game-session.service';
import { GameSessionResolver } from './game-session.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameSession } from './game-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameSession])],
  providers: [GameSessionService, GameSessionResolver],
  exports: [GameSessionService],
})
export class GameSessionModule {}
