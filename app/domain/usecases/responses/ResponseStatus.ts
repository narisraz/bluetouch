import type { Errors } from "~/domain/entities/Errors";

export interface ResponseStatus<Data> {
  isSuccess: boolean;
  error?: Errors;
  data?: Data;
}
