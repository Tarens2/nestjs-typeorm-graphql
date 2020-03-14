/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IMutation {
  createUser(
    firstName: string,
    age: number,
    teamId: number,
    lastName?: string,
  ): User | Promise<User>;
}

export interface IQuery {
  getUser(id: Odd): User | Promise<User>;
  getTeam(id: number): Team | Promise<Team>;
  getTeams(): Team[] | Promise<Team[]>;
  getUsers(): User[] | Promise<User[]>;
}

export interface Team {
  id: number;
  name: string;
  users?: User[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  team?: Team;
}

export type Odd = any;
