import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendeur } from 'src/app/class/vendeur';
import { Voiture } from 'src/app/class/voiture';
import { VendeurService } from 'src/app/services/vendeur.service';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-view-seller',
  templateUrl: './view-seller.component.html',
  styleUrls: ['./view-seller.component.css']
})
export class ViewSellerComponent implements OnInit {
  vendeur!:Vendeur
  vointure!:Voiture[]
  user:any
  x:String="encour"
  constructor(private service:VendeurService,private serviceVoiture:VoitureService,    private router: Router
    ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '[]');

    this.vendeur=this.user 
 

    console.log(this.vendeur)

  this.service.getVendeurById(this.vendeur.id).subscribe(data => {
    this.vendeur=data
    this.vointure=this.vendeur.voiture
  })
  }
  deleteVoiture(id:Number)
  {
    this.vendeur.voiture=this.vendeur.voiture.filter(e => e.id !=id)

    this.service.modifVendeur(this.vendeur).subscribe(data => {
      
      console.log(data)
      this.serviceVoiture.deleteVoiture(id).subscribe(data => console.log(data));
    })
    
  


  }

  filter()
  {
    console.log(this.x)
    this.vointure=this.vendeur.voiture.filter(e => e.statut==this.x)
  }
  deconnexion()
  {
    localStorage.setItem('user', JSON.stringify("null"));
    this.router.navigate(['/login']);
  }

  edite(id:Number)
  {
    this.router.navigate(['/EditVoiture',id]);
  }
}
