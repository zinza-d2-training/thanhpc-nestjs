import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeTypeColumnsInUser1647836761201
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE users MODIFY COLUMN dob date');
    await queryRunner.query(
      'ALTER TABLE users MODIFY COLUMN gender tinyint(4)',
    );
    await queryRunner.dropColumn('users', 'status_injection_registration');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE users MODIFY COLUMN dob timestamp');
    await queryRunner.query(
      'ALTER TABLE users MODIFY COLUMN gender varchar(11)',
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
