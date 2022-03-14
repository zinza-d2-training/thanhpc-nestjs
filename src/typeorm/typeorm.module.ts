import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule as PackageTypeOrmModule } from '@nestjs/typeorm';
import * as typeormConfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.example',
    }),
  ],
})
export class TypeormModule {
  static forRoot(): DynamicModule {
    return PackageTypeOrmModule.forRoot(typeormConfig);
  }
}
