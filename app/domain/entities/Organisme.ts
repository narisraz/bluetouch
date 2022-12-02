import { Etat } from "~/domain/entities/Etat";

export class Organisme {
  public responsable!: string;
  public nom!: string;
  public tel!: string;
  public email!: string;
  public etat: Etat = Etat.SUSPENDU;
}
