import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeTypeColumnsInUser1647836761201
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ALTER Column "dob" date');
    await queryRunner.query(
      'ALTER TABLE "users" ALTER Column "gender" tinyint(4)',
    );
    await queryRunner.dropColumn('users', 'status_injection_registration');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ALTER Column "dob" timestamp');
    await queryRunner.query(
      'ALTER TABLE "users" ALTER Column "gender" varchar(11)',
    );
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'status_injection_registration',
        type: 'varchar',
        length: '255',
      }),
    );
  }
}
