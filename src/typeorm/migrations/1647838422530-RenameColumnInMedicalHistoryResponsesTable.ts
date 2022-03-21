import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameColumnInMedicalHistoryResponsesTable1647838422530
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "medical_history_responses" RENAME "status_injection_registration" to "injection_registration_status"',
    );
    await queryRunner.query(
      'ALTER TABLE "medical_history_responses" ALTER Column "injection_registration_status" tinyint(4)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "medical_history_responses" RENAME "injection_registration_status" to "status_injection_registration"',
    );
  }
}
