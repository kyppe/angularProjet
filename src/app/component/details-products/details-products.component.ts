import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/class/utilisateur';
import { Vente } from 'src/app/class/vente';
import { Voiture } from 'src/app/class/voiture';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent implements OnInit {
  voiture!:Voiture
  user:any
  utilisateur!:Utilisateur
  constructor(public activeroute: ActivatedRoute,private voiteurService:VoitureService,private serviceUtilisateur:UtilisateurService) { }

  ngOnInit(): void {
    let id:Number = this.activeroute.snapshot.params['id']
    this.voiteurService.getVoitureById(id).subscribe(data => this.voiture=data)
  }

  buy()
  {
    this.user = JSON.parse(localStorage.getItem('user') || '[]');
    this.utilisateur=this.user 
    this.serviceUtilisateur.getUtilisateurById(this.utilisateur.id).subscribe(data =>{
      
      console.log(data)
      this.utilisateur=data
      this.voiture.statut="acheter"
      let vente:Vente = new Vente (0,this.voiture,new Date())
      this.utilisateur=data
      this.utilisateur.vente.push(vente)
      this.serviceUtilisateur.modifUtilisateur(this.utilisateur).subscribe(data => console.log(data))

      })
  }

}
