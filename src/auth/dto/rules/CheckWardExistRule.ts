import { InjectRepository } from '@nestjs/typeorm';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Repository } from 'typeorm';
import { Ward } from 'src/entities/Ward';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsExistedWardValidator implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(Ward)
    private readonly WardRepository: Repository<Ward>,
  ) {}
  async validate(text: any) {
    return await this.WardRepository.findOne({ id: Number(text) }).then(
      (ward) => {
        if (ward) return true;
        return false;
      },
    );
  }
  defaultMessage() {
    // here you can provide default error message if validation failed
    return `Xã phường không tồn tại!`;
  }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsExistedWardValidator,
    });
  };
}
