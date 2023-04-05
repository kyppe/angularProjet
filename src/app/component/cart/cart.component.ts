import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/class/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { VendeurService } from 'src/app/services/vendeur.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  utilisateur!:Utilisateur
  user:any
  constructor(private serviceUtilisateur:UtilisateurService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '[]');

    this.utilisateur=this.user 
    this.serviceUtilisateur.getUtilisateurById(this.utilisateur.id).subscribe(data =>{
      
      console.log(data)
      this.utilisateur=data

  },)}

  delete(id:Number)
  {
    this.utilisateur.vente=this.utilisateur.vente.filter(e => e.voiture.id!=id)
    this.serviceUtilisateur.modifUtilisateur(this.utilisateur).subscribe(data => console.log(data))
  }
}
