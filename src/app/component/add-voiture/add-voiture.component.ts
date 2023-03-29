import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendeur } from 'src/app/class/vendeur';
import { Voiture } from 'src/app/class/voiture';
import { VendeurService } from 'src/app/services/vendeur.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {
  formAjouter!: FormGroup;
  constructor(private fb: FormBuilder,private service:VendeurService,private router: Router) { }
  user:any 

  ngOnInit(): void {
    this.formAjouter = this.fb.nonNullable.group({
      type: [''],
      prix: [''],
      marque: ['Nissan'],
      img: [''],
      statut: ['encour'],
      color: [''],
      description:['']

    });

  }
  ajout()
  {
    this.user = JSON.parse(localStorage.getItem('user') || '[]');
    
    let vendeur:Vendeur=this.user 
    this.service.getVendeurById(vendeur.id).subscribe(data => {
      vendeur=data
    let voiture:Voiture=this.formAjouter.value
    console.log(vendeur.voiture)
   vendeur.voiture.push(voiture)
   console.log(vendeur.voiture)
    this.service.modifVendeur(vendeur).subscribe(data => console.log(data))
    this.router.navigate(['/seller']);
    })
  }

}
