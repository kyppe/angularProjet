import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../class/utilisateur';
import { Vendeur } from '../class/vendeur';


const URL = "http://localhost:8088/"
@Injectable({
  providedIn: 'root'
})
export class AuthnficationService {

  constructor(private http: HttpClient) { }
  registerVendeur(vendeur:Vendeur ):Observable<Vendeur>
  {
    return this.http.post<Vendeur>(URL+"vendeur",vendeur)
  }


  registerUtilisateur(utilisateur:Utilisateur ):Observable<Utilisateur>
  {
    return this.http.post<Utilisateur>(URL+"utilisateur",utilisateur)
  }

  loginVendeur(vendeur:Vendeur):Observable<Vendeur>
  {
    return this.http.post<Vendeur>(URL+"vendeur/login",vendeur)
  }
  loginUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>
  {
    return this.http.post<Utilisateur>(URL+"utilisateur/login",utilisateur)
  }
}
