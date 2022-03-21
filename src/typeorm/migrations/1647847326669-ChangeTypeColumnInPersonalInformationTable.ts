import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeTypeColumnInPersonalInformationTable1647847326669
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE personal_informations MODIFY COLUMN dob date',
    );
    await queryRunner.query(
      'ALTER TABLE personal_informations MODIFY COLUMN expected_date date',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE personal_informations MODIFY COLUMN dob timestamp',
    );
    await queryRunner.query(
      'ALTER TABLE personal_informations MODIFY COLUMN expected_date varchar(255)',
    );
  }
}
