import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../class/voiture';
const URL: string = 'http://localhost:8088/voiture';
@Injectable({
  providedIn: 'root'
})

export class VoitureService { 

  constructor(private http: HttpClient) { }
  getAll(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(URL);
  }
  deleteVoiture(id:Number):Observable<Voiture>
  {
    return this.http.delete<Voiture>(URL+"/"+id)
  }
  getVoitureById(id:Number): Observable<Voiture>
  {
    return this.http.get<Voiture>(URL+"/"+id)
  }
  EditeVoitureById(voiture:Voiture):Observable<Voiture>
  {
    return this.http.put<Voiture>(URL+"/"+voiture.id,voiture)
  }
}
