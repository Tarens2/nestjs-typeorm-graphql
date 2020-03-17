
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface LoginResponse {
    accessToken: string;
}

export interface IMutation {
    createUser(username: string, password: string): User | Promise<User>;
    login(username: string, password: string): LoginResponse | Promise<LoginResponse>;
}

export interface IQuery {
    getUser(id: Odd): User | Promise<User>;
    getTeam(id: number): Team | Promise<Team>;
    getTeams(): Team[] | Promise<Team[]>;
    getUsers(): User[] | Promise<User[]>;
    getMe(): User | Promise<User>;
}

export interface Team {
    id: number;
    name: string;
    users?: User[];
}

export interface User {
    id: number;
    firstName?: string;
    lastName?: string;
    age?: number;
    team?: Team;
    username: string;
}

export type Odd = any;
