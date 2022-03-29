import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnInVaccinationSitesTable1648528043505
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'vaccination_sites',
      new TableColumn({
        name: 'site_manager',
        type: 'varchar',
        length: '255',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('vaccination_sites', 'site_manager');
  }
}
