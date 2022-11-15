import Etat from "./Etat";

class Organisme {
  private _responsable!: string;
  private _nom!: string;
  private _tel!: string;
  private _email!: string;
  private _etat: Etat = Etat.BLOQUE;

  /**
   * Getter responsable
   * @return {string}
   */
  public get responsable(): string {
    return this._responsable;
  }

  /**
   * Getter nom
   * @return {string}
   */
  public get nom(): string {
    return this._nom;
  }

  /**
   * Getter tel
   * @return {string}
   */
  public get tel(): string {
    return this._tel;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter etat
   * @return {Etat }
   */
  public get etat(): Etat {
    return this._etat;
  }

  /**
   * Setter responsable
   * @param {string} value
   */
  public set responsable(value: string) {
    this._responsable = value;
  }

  /**
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string) {
    this._nom = value;
  }

  /**
   * Setter tel
   * @param {string} value
   */
  public set tel(value: string) {
    this._tel = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter etat
   * @param {Etat } value
   */
  public set etat(value: Etat) {
    this._etat = value;
  }
}

export default Organisme;
