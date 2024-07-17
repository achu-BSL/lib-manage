import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraintInterface,
} from "class-validator";

class PublishedDateValidator implements ValidatorConstraintInterface {
  validate(value: Date): boolean {
    const date = value.getDate();
    const month = value.getMonth();
    const year = value.getFullYear();

    return new Date() > new Date(year, month, date);
  }

  defaultMessage(): string {
    return "Publish date  can't be future date";
  }
}
export const IsValidPublishDate = (validationOptions?: ValidationOptions) => {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "IsValidPublishedDate",
      propertyName,
      target: object.target,
      validator: PublishedDateValidator,
      options: validationOptions,
    });
  };
};