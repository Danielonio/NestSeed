import {
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';

export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  exceptionFactory: (errors: ValidationError[]) => {
    const constraints = getAllConstraints(errors);
    throw new UnprocessableEntityException(constraints);
  },
};

function getAllConstraints(errors: ValidationError[]): string[] {
  const constraints: string[] = [];
  for (const error of errors) {
    if (error.constraints) {
      const constraintValues = Object.values(error.constraints);
      constraints.push(...constraintValues);
    }

    if (error.children) {
      const childConstraints = getAllConstraints(error.children);
      constraints.push(...childConstraints);
    }
  }
  return constraints;
}

export const inputValidationPipe = new ValidationPipe(VALIDATION_PIPE_OPTIONS);
