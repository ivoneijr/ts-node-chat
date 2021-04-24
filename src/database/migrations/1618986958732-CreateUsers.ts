import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1618986958732 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
