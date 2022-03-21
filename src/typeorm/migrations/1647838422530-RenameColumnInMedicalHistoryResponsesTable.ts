import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameColumnInMedicalHistoryResponsesTable1647838422530
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE medical_history_responses RENAME COLUMN status_injection_registration to injection_registration_status',
    );
    await queryRunner.query(
      'ALTER TABLE medical_history_responses MODIFY COLUMN injection_registration_status tinyint(4)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE medical_history_responses RENAME COLUMN injection_registration_status to status_injection_registration',
    );
    await queryRunner.query(
      'ALTER TABLE medical_history_responses MODIFY COLUMN injection_registration_status varchar(255)',
    );
  }
}
