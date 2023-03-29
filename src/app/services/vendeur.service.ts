import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendeur } from '../class/vendeur';
import { Voiture } from '../class/voiture';
const URL = "http://localhost:8088/"
@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  constructor(private http : HttpClient ) { }
  modifVendeur(vendeur:Vendeur):Observable<Vendeur>
  {
    return this.http.put<Vendeur>(URL+"vendeur/"+vendeur.id,vendeur)
  }
  getVendeurById(id:Number):Observable<Vendeur>
  {
    return this.http.get<Vendeur>(URL+"vendeur/"+id)
  }

}
