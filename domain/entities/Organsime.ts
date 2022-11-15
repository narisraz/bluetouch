class Organisme {
  private _id!: string;
  private _responsable!: string;

  public get responsable(): string {
    return this._responsable;
  }

  public set responsable(value: string) {
    this._responsable = value;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }
}

export default Organisme;
