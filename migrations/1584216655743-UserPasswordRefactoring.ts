import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UserPasswordRefactoring1584216655743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumns('user', [
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "username",
                type: "varchar",
                isUnique: true,
                isNullable: true
            }),
        ]);

        await queryRunner.query(`
            UPDATE "user" as u1 
                set "username" = (select concat(u."lastName", u."firstName", u."id") from "user" as u 
                    where u.id = u1.id)
        `);

        await queryRunner.query(`
            UPDATE "user" set "password" = 'password'
        `);

        await queryRunner.changeColumn('user', 'password', new TableColumn({
            name: "password",
            type: "varchar",
            isNullable: false
        }))

        await queryRunner.changeColumn('user', 'username', new TableColumn({
            name: "username",
            type: "varchar",
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
