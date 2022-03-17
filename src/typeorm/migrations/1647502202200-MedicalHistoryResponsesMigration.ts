import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class MedicalHistoryResponsesMigration1647502202200
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'medical_history_responses',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            length: '11',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'prehistoric', type: 'varchar', length: '255' },
          { name: 'symptom', type: 'varchar', length: '255', isNullable: true },
          { name: 'is_symptom', type: 'tinyint', length: '1' },
          {
            name: 'status_injection_registration',
            type: 'varchar',
            length: '255',
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
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medical_history_responses');
  }
}
