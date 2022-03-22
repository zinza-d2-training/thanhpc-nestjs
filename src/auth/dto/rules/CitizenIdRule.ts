import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'citizen_id', async: false })
export class CitizenIdRule implements ValidatorConstraintInterface {
  validate(text: string) {
    return text.length === 9 || text.length === 12; // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} phải đủ 9 hoặc 12 ký tự`;
  }
}
