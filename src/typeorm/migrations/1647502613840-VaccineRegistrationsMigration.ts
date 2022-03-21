import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class VaccineRegistrationsMigration1647502613840
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vaccine_registrations',
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
            name: 'personal_info_id',
            type: 'int',
            length: '11',
          },
          {
            name: 'medical_history_id',
            type: 'int',
            length: '11',
          },
          { name: 'status', type: 'varchar', length: '255' },
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
            columnNames: ['personal_info_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'personal_informations',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['medical_history_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'medical_history_responses',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vaccine_registrations');
  }
}
