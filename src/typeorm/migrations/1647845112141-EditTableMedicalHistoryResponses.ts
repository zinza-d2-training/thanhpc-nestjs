import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class EditTableMedicalHistoryResponses1647845112141
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('medical_history_responses', 'prehistoric');
    await queryRunner.addColumn(
      'medical_history_responses',
      new TableColumn({
        name: 'question_id',
        type: 'int',
        length: '11',
      }),
    );
    await queryRunner.createForeignKey(
      'medical_history_responses',
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'medical_history_questions',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
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
        referencedTableName: 'medical_history_questions',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.query(
      'ALTER TABLE medical_history_responses MODIFY COLUMN symptom varchar(255) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE medical_history_responses MODIFY COLUMN is_symptom tinyint(4)',
    );

    const table = await queryRunner.getTable('vaccine_registrations');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('medical_history_id') !== -1,
    );
    await queryRunner.dropForeignKey('vaccine_registrations', foreignKey);
    await queryRunner.dropColumn('vaccine_registrations', 'medical_history_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'medical_history_responses',
      new TableColumn({
        name: 'prehistoric',
        type: 'varchar',
        length: '255',
      }),
    );

    const table = await queryRunner.getTable('medical_history_responses');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('question_id') !== -1,
    );
    await queryRunner.dropForeignKey('medical_history_responses', foreignKey);
    await queryRunner.dropColumn('medical_history_responses', 'question_id');

    const table2 = await queryRunner.getTable('vaccine_registrations');
    const foreignKey2 = table2.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('vaccine_registration_id') !== -1,
    );
    await queryRunner.dropForeignKey('vaccine_registrations', foreignKey2);
    await queryRunner.dropColumn(
      'vaccine_registrations',
      'vaccine_registration_id',
    );

    await queryRunner.query(
      'ALTER TABLE medical_history_responses MODIFY COLUMN symptom varchar(255) NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE medical_history_responses MODIFY COLUMN is_symptom tinyint(1)',
    );

    await queryRunner.addColumn(
      'vaccine_registrations',
      new TableColumn({
        name: 'medical_history_id',
        type: 'int',
        length: '11',
      }),
    );
    await queryRunner.createForeignKey(
      'vaccine_registrations',
      new TableForeignKey({
        columnNames: ['medical_history_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'medical_history_questions',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}
