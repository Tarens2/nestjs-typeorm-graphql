import { Injectable } from '@nestjs/common';
import { TeamsService } from '../teams/teams.service';

@Injectable()
export class GameSessionService {
  constructor(private readonly teamsService: TeamsService) {}
  searchAvailableGame() {
    // todo: if there is empty team -> enter team -> return session of team
    // todo: else create session -> create team -> enter team -> return gamesession
  }
}
