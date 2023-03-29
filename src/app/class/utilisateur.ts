import { Vente } from './vente';

export class Utilisateur {
  public id!:Number
  constructor(
  
    public nom: String,
    public prenom: String,
    public username: String,
    public password: String,
    public vente: Vente[],
    public role: String
  ) {}
  
}
