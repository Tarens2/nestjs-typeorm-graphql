import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TeamsModule } from './teams/teams.module';
import * as ormconfig from './ormconfig';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TeamsModule,
    UsersModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({
        req,
      }),
    }),
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
