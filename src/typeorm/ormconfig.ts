import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  migrationsRun: true,
  logging: Boolean(process.env.MYSQL_LOGGING),
  logger: 'advanced-console',
  autoLoadEntities: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/**/*{.ts,.js}'],
  entities: [__dirname + '/entities/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/typeorm/migrations',
    subscribersDir: 'src/typeorm/subscribers',
    entitiesDir: 'src/typeorm/entities',
  },
};

export = config;
