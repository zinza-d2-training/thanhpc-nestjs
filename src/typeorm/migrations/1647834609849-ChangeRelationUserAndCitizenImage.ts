import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class ChangeRelationUserAndCitizenImage1647834609849
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'citizen_images',
      new TableColumn({
        name: 'user_id',
        type: 'int',
        length: '11',
      }),
    );
    await queryRunner.createForeignKey(
      'citizen_images',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    // delete column citizen_image_id
    const table = await queryRunner.getTable('users');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('citizen_image_id') !== -1,
    );
    await queryRunner.dropForeignKey('users', foreignKey);
    await queryRunner.dropColumn('users', 'citizen_image_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('citizen_images');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );
    await queryRunner.dropForeignKey('citizen_images', foreignKey);
    await queryRunner.dropColumn('citizen_images', 'user_id');

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'citizen_image_id',
        type: 'int',
        length: '11',
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'citizen_image_id',
        type: 'varchar',
        length: '255',
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        columnNames: ['citizen_image_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'citizen_images',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}
