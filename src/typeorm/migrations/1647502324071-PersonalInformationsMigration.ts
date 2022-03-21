import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class PersonalInformationsMigration1647502324071
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'personal_informations',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            length: '11',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'injection_id', type: 'int', length: '11' },
          { name: 'full_name', type: 'varchar', length: '255' },
          { name: 'dob', type: 'timestamp' },
          { name: 'gender', type: 'varchar', length: '11' },
          { name: 'phone_number', type: 'varchar', length: '11' },
          { name: 'email', type: 'varchar', length: '255', isNullable: true },
          { name: 'citizen_id', type: 'varchar', length: '255' },
          {
            name: 'health_insurance_number',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'occupation',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'workplace',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          { name: 'address', type: 'varchar', length: '255', isNullable: true },
          { name: 'ward_id', type: 'int', length: '11' },
          { name: 'ethnic', type: 'varchar', length: '255', isNullable: true },
          {
            name: 'nationality',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          { name: 'priority_group_id', type: 'int', length: '11' },
          {
            name: 'expected_date',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          { name: 'session_id', type: 'int', length: '2', isNullable: true },
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
            columnNames: ['injection_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            referencedTableName: 'injections',
          },
          {
            columnNames: ['ward_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            referencedTableName: 'wards',
          },
          {
            columnNames: ['priority_group_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            referencedTableName: 'priority_groups',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('personal_informations');
  }
}
