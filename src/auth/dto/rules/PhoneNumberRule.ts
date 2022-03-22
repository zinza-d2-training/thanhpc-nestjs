import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'phone_number', async: false })
export class PhoneNumberRule implements ValidatorConstraintInterface {
  validate(text: string) {
    return !!text.match(
      /(03|05|07|08|09|84[1|3|5|7|9]|01[2|6|8|9])+([0-9]{8})\b/,
    ); // for async validations you must return a Promise<boolean> here
  }

  defaultMessage() {
    // here you can provide default error message if validation failed
    return `Vui lòng nhập đúng định dạng!`;
  }
}
