import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class FixRelationBeetwenUserAndInjectionHistories1647837651747
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'injection_histories',
      new TableColumn({
        name: 'user_id',
        type: 'int',
        length: '11',
      }),
    );
    await queryRunner.createForeignKey(
      'injection_histories',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('injection_histories');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );
    await queryRunner.dropForeignKey('injection_histories', foreignKey);
    await queryRunner.dropColumn('injection_histories', 'user_id');

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'injection_history_id',
        type: 'int',
        length: '11',
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        columnNames: ['injection_history_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'injection_histories',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}
