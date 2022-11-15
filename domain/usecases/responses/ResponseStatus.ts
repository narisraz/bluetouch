import Errors from "../../entities/Errors";

interface ResponseStatus<Data> {
  isSuccess: boolean;
  error?: Errors;
  data?: Data;
}

export default ResponseStatus;
