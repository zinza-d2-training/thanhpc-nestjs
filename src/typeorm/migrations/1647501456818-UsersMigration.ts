import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UsersMigration1647501456818 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            length: '11',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'citizen_id', type: 'varchar', length: '255' },
          { name: 'role', type: 'varchar', length: '255' },
          { name: 'password', type: 'varchar', length: '255' },
          { name: 'citizen_image_id', type: 'int', length: '11' },
          { name: 'full_name', type: 'varchar', length: '255' },
          { name: 'dob', type: 'timestamp' },
          { name: 'gender', type: 'varchar', length: '11' },
          { name: 'phone_number', type: 'varchar', length: '11' },
          { name: 'ward_id', type: 'int', length: '11' },
          { name: 'injection_history_id', type: 'int', length: '11' },
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
        foreignKeys: [
          {
            columnNames: ['citizen_image_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            referencedTableName: 'citizen_images',
          },
          {
            columnNames: ['ward_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            referencedTableName: 'wards',
          },
          {
            columnNames: ['injection_history_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            referencedTableName: 'injection_histories',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
