import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'phone_number', async: false })
export class PhoneNumberRule implements ValidatorConstraintInterface {
  validate(text: string) {
    return !!text.match(
      /(03|05|07|08|09|84[1|3|5|7|9]|01[2|6|8|9])+([0-9]{8})\b/,
    );
  }

  defaultMessage() {
    return `Vui lòng nhập đúng định dạng!`;
  }
}
