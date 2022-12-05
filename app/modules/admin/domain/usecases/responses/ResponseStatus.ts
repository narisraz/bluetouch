import type { Errors } from "../../entities/Errors";

export interface ResponseStatus<Data> {
  isSuccess: boolean;
  error?: Errors;
  data?: Data;
}
