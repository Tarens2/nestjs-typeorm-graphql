import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Connection } from 'typeorm';
import { UsersModule } from './repositories/users/users.module';
import { TeamsModule } from './repositories/teams/teams.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'league',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),

    UsersModule,
    TeamsModule,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
