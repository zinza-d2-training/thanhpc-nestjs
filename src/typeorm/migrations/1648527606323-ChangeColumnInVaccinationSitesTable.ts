import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class ChangeColumnInVaccinationSitesTable1648527606323
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('vaccination_sites');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('site_manager_id') !== -1,
    );
    await queryRunner.dropForeignKey('vaccination_sites', foreignKey);
    await queryRunner.dropColumn('vaccination_sites', 'site_manager_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'vaccination_sites',
      new TableColumn({
        name: 'site_manager_id',
        type: 'int',
        length: '11',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'vaccination_sites',
      new TableForeignKey({
        columnNames: ['site_manager_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}
