import type { Errors } from "../../value-objects/Errors";

export interface ResponseStatus<Data> {
  isSuccess: boolean;
  error?: Errors;
  data?: Data;
}
