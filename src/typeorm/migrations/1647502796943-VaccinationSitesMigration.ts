import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class VaccinationSitesMigration1647502796943
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vaccination_sites',
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
            name: 'name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'street_name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'ward_id',
            type: 'int',
            length: '11',
          },
          {
            name: 'site_manager_id',
            type: 'int',
            length: '11',
          },
          {
            name: 'number_of_vaccination_table',
            type: 'int',
            length: '11',
          },
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
            columnNames: ['ward_id'],
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            referencedTableName: 'wards',
          },
          {
            columnNames: ['site_manager_id'],
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            referencedTableName: 'users',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vaccination_sites');
  }
}
