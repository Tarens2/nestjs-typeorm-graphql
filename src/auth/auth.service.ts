import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from '../users/dtos/login.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findByUsername(username);
    if (user && user.checkIfUnencryptedPasswordIsValid(pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginInput) {
    const payload = { username: user.username };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
