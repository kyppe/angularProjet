import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/class/utilisateur';
import { Vendeur } from 'src/app/class/vendeur';
import { Voiture } from 'src/app/class/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  voitures!:Voiture[]
  constructor(public serviceVoiture:VoitureService,private router: Router) { }

  utilisateur!:Utilisateur
  user:any
  ngOnInit(): void {
    this.serviceVoiture.getAll().subscribe((data)=> {console.log(data)
    this.voitures=data
    })
    this.user = JSON.parse(localStorage.getItem('user') || '[]');

    this.utilisateur=this.user 
 

    console.log(this.utilisateur)
   
  }
  buy(voiture:Voiture)
  {

    
    this.router.navigate(['/detailsProducts',voiture.id])
    
  }
}
