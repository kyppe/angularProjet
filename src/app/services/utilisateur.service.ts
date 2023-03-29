import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../class/utilisateur';
const URL = "http://localhost:8088/"
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient ) { }
  getUtilisateurById(id:Number):Observable<Utilisateur>
  {
    return this.http.get<Utilisateur>(URL+"utilisateur/"+id)
  }

  modifUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>
  {
    return this.http.put<Utilisateur>(URL+"utilisateur/"+utilisateur.id,utilisateur)
  }
}
