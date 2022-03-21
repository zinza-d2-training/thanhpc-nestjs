import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule as PackageTypeOrmModule } from '@nestjs/typeorm';
import * as typeormConfig from './ormconfig';

@Module({
  imports: [],
})
export class TypeormModule {
  static forRoot(): DynamicModule {
    return PackageTypeOrmModule.forRoot(typeormConfig);
  }
}
