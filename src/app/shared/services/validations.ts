import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { VALIDATION_PATTERN } from '../constants/app.constants';

export function camelCaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /^[a-z]+([A-Z][a-z0-9]+)+/.test(String(control.value))
      ? false
      : /^[a-z]+$/.test(String(control.value))
        ? false
        : true;
    return !forbidden ? { forbiddenName: true } : null;
  };
}

export function isStrongPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const minLength = (control?.value?.length >= 8)
    const minLowercase = /[a-z]+/.test(String(control.value))
    const minUppercase = /[A-Z]+/.test(String(control.value))
    const minSymbols = /[*@!#%&()^~{}]+/.test(String(control.value))
    const minNumbers = /[0-9]+/.test(String(control.value))

    const data = minLength && minLowercase && minUppercase && minSymbols && minNumbers;
    return !data ? { strongPassword: true } : null;
  };
}
export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if (control.value && (control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}

/**
 * String With Dot validation. EX. SMTP Host
 * @returns
 */
export function stringWithDot(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isInvalid = VALIDATION_PATTERN.STRING_WITH_DOT.test(
      String(control.value)
    )
      ? false
      : true;
    return isInvalid ? { stringWithDot: true } : null;
  };
}

/**
 * Digit validation.
 * @returns
 */
export function digit(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pattern = VALIDATION_PATTERN.WHOLE_NUMBER;
    const isValid = pattern.test(String(control.value))
    return !isValid ? { digit: true } : null;
  };
}

/**
 * String validation.
 * @returns
 */
export function string(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pattern = VALIDATION_PATTERN.ONLY_ALPHABETS;
    const isValid = pattern.test(String(control.value))
    return !isValid ? { string: true } : null;
  };
}

/**
 * Email validation.
 * @returns
 */
export function email(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pattern = VALIDATION_PATTERN.EMAIL;
    const isValid = pattern.test(String(control.value))
    return !isValid ? { email: true } : null;
  };
}

/**
 * Url validation.
 * @returns
 */
export function isValidURl(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isInvalid = control.value
      ? VALIDATION_PATTERN.VALID_URL.test(String(control.value))
        ? false
        : true
      : false;
    return isInvalid ? { isValidURl: true } : null;
  };
}

/**
 * String With Space validation.
 * @returns
 */
export function stringWithSpace(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isInvalid = control.value
      ? VALIDATION_PATTERN.ALPHABETS_WITH_SPACE.test(String(control.value))
        ? false
        : true
      : false;
    return isInvalid ? { stringWithSpace: true } : null;
  };
}

/**
 * Match Validators function is used to compare the password and confirm password
 * @param control
 * @param controlTwo
 * @returns
 */
export function matchValidator(
  control: AbstractControl | null,
  controlTwo: AbstractControl | null
): ValidatorFn {
  return () => {
    if (control && controlTwo && control.value !== controlTwo.value) {
      return { match_error: 'Value does not match' };
    }
    else {
      return null;
    }
  };
}

/**
 * String With Number validation. EX. abc123
 * @returns
 */
export function stringWithNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isInvalid = control.value
      ? VALIDATION_PATTERN.STRING_WITH_NUMBER.test(String(control.value))
        ? false
        : true
      : false;
    return isInvalid ? { stringWithNumber: true } : null;
  };
}
