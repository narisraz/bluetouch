interface IUseCase<I, O> {
  execute(i: I): O;
}

export default IUseCase;
