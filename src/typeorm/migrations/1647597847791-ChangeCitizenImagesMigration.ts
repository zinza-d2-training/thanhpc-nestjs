import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeCitizenImagesMigration1647597847791
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('citizen_images', 'name');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'citizen_images',
      new TableColumn({
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: true,
      }),
    );
  }
}
