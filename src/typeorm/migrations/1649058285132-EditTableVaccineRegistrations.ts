import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class EditTableVaccineRegistrations1649058285132
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'medical_history_responses',
      new TableColumn({
        name: 'vaccine_registration_id',
        type: 'int',
        length: '11',
      }),
    );
    await queryRunner.createForeignKey(
      'medical_history_responses',
      new TableForeignKey({
        columnNames: ['vaccine_registration_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'vaccine_registrations',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    const table = await queryRunner.getTable('vaccine_registrations');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('vaccine_registration_id') !== -1,
    );
    await queryRunner.dropForeignKey('vaccine_registrations', foreignKey);
    await queryRunner.dropColumn(
      'vaccine_registrations',
      'vaccine_registration_id',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('medical_history_responses');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('vaccine_registration_id') !== -1,
    );
    await queryRunner.dropForeignKey('medical_history_responses', foreignKey);
    await queryRunner.dropColumn(
      'vaccine_registrations',
      'vaccine_registration_id',
    );

    await queryRunner.addColumn(
      'vaccine_registrations',
      new TableColumn({
        name: 'vaccine_registration_id',
        type: 'int',
        length: '11',
      }),
    );
    await queryRunner.createForeignKey(
      'vaccine_registrations',
      new TableForeignKey({
        columnNames: ['vaccine_registration_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'medical_history_responses',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}
