import { Voiture } from './voiture';

export class Vendeur {
  public id!: Number;
  constructor(
    public nom: String,
    public prenom: String,
    public username: String,
    public password: String,
    public voiture: Voiture[],
    public role: String
  ) {}
}
