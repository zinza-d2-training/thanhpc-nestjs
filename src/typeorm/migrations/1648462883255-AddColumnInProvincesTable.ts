import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnInProvincesTable1648462883255
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'provinces',
      new TableColumn({
        name: 'injected_number',
        type: 'int',
        length: '11',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('provinces', 'injected_number');
  }
}
