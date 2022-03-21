import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InjectionHistoriesMigration1647500919549
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'injection_histories',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            length: '11',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'injected_vaccine_name_id',
            type: 'int',
            length: '11',
          },
          { name: 'injected_vaccine_day', type: 'timestamp' },
          { name: 'injected_vaccine_lot_number', type: 'int', length: '11' },
          { name: 'injected_vaccine_lot_site', type: 'varchar', length: '255' },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: true,
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['injected_vaccine_name_id'],
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            referencedTableName: 'vaccines',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('injection_histories');
  }
}
