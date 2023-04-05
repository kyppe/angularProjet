import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/class/utilisateur';
import { Vendeur } from 'src/app/class/vendeur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { VendeurService } from 'src/app/services/vendeur.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  formProfile!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: VendeurService,
    private router: Router,
    private serviceUtilisater:UtilisateurService
  ) {}
  user: any;
  vendeur!: Vendeur;
  utilisateur!:Utilisateur
  ngOnInit(): void {
    this.formProfile = this.fb.nonNullable.group({
      nom: [''],
      Prenom: [''],
      username: ['Nissan'],
      Password: [''],
    });
    this.user = JSON.parse(localStorage.getItem('user') || '[]');
    console.log(this.user["role"])
    if (this.user["role"] == 'vendeur') {
      this.vendeur = this.user;

      console.log(this.vendeur);

      this.service.getVendeurById(this.vendeur.id).subscribe((data) => {
        this.vendeur = data;
        this.formProfile = this.fb.nonNullable.group({
          nom: this.vendeur.nom,
          Prenom: this.vendeur.prenom,
          username: this.vendeur.username,
          Password: this.vendeur.password,
        });
      });
    }
    else 
    {
      this.utilisateur = this.user;
      this.serviceUtilisater.getUtilisateurById(this.utilisateur.id).subscribe((data) => {
        this.utilisateur = data;
        this.formProfile = this.fb.nonNullable.group({
          nom: this.utilisateur.nom,
          Prenom: this.utilisateur.prenom,
          username: this.utilisateur.username,
          Password: this.utilisateur.password,
        });
      });
    }
  }

  modif() {
    if (this.user["role"] == 'vendeur') {
    this.vendeur.nom = this.formProfile.value['nom'];
    this.vendeur.prenom = this.formProfile.value['Prenom'];
    this.vendeur.username = this.formProfile.value['username'];
    this.vendeur.password = this.formProfile.value['Password'];
    this.service
      .modifVendeur(this.vendeur)
      .subscribe((data) => console.log(data));
    this.router.navigate(['/seller']);
    }
    else 
    {
      this.utilisateur.nom = this.formProfile.value['nom'];
      this.utilisateur.prenom = this.formProfile.value['Prenom'];
      this.utilisateur.username = this.formProfile.value['username'];
      this.utilisateur.password = this.formProfile.value['Password'];
      this.serviceUtilisater
        .modifUtilisateur(this.utilisateur)
        .subscribe((data) => console.log(data));
      this.router.navigate(['/shopping']);
    }
  }
}
