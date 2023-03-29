import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendeur } from 'src/app/class/vendeur';
import { VendeurService } from 'src/app/services/vendeur.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formProfile!: FormGroup;
  constructor(private fb: FormBuilder,private service:VendeurService, private router: Router) { }
  user:any
  vendeur!:Vendeur
  ngOnInit(): void {
    this.formProfile = this.fb.nonNullable.group({
      nom: [''],
      Prenom: [''],
      username: ['Nissan'],
      Password: [''],
 
    });
    this.user = JSON.parse(localStorage.getItem('user') || '[]');

    this.vendeur=this.user 
 

    console.log(this.vendeur)

  this.service.getVendeurById(this.vendeur.id).subscribe(data => {
    this.vendeur=data
    this.formProfile = this.fb.nonNullable.group({
      nom: this.vendeur.nom,
      Prenom: this.vendeur.prenom,
      username: this.vendeur.username,
      Password: this.vendeur.password,

    });
 
  })
  }

  modif()
  {
    this.vendeur.nom=this.formProfile.value["nom"]
    this.vendeur.prenom=this.formProfile.value["Prenom"]
    this.vendeur.username=this.formProfile.value["username"]
    this.vendeur.password=this.formProfile.value["Password"]
    this.service.modifVendeur(this.vendeur).subscribe(data => console.log(data))
    this.router.navigate(['/seller']);
  }

}
