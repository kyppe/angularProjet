import { Utilisateur } from "./utilisateur";
import { Voiture } from "./voiture";

export class Vente {
    constructor(public id: Number, public voiture:Voiture,public utilisateur:Number) {}
}
