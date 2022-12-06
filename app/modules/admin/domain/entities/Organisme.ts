import { Etat } from "../value-objects/Etat";

export class Organisme {
  public id!: string;
  public responsable!: string;
  public nom!: string;
  public tel!: string;
  public email!: string;
  public etat: Etat = Etat.SUSPENDU;
}
