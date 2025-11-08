import { BadRequestException, ValidationError } from "@nestjs/common";
declare const FormatValidation: (errors: ValidationError[]) => BadRequestException;
export default FormatValidation;
