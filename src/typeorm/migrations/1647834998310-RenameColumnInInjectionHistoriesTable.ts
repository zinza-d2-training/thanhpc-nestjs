import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameColumnInInjectionHistoriesTable1647834998310
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE injection_histories RENAME COLUMN injected_vaccine_name_id to injected_vaccine_id',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE injection_histories RENAME COLUMNinjected_vaccine_id to injected_vaccine_name_id',
    );
  }
}
