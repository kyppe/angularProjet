import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/class/utilisateur';
import { Vendeur } from 'src/app/class/vendeur';
import { AuthnficationService } from 'src/app/services/authnfication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: AuthnficationService,
    private router: Router
  ) {}
  formRegister!: FormGroup;
  ngOnInit(): void {
    this.formRegister = this.fb.nonNullable.group({
      Nom: [''],
      Prenom: [''],
      Password: [''],
      utilisateur: [''],
      role: ['vendeur'],
    });
  }
  register() {
    console.log(this.formRegister.value);
    if (this.formRegister.value['role'] == 'vendeur') {
      let vendeur: Vendeur = new Vendeur(
        this.formRegister.value['Nom'],
        this.formRegister.value['Prenom'],
        this.formRegister.value['utilisateur'],
        this.formRegister.value['Password'],
        [],
        this.formRegister.value['role']
      );
      this.service
        .registerVendeur(vendeur)
        .subscribe((data) => console.log(data));
      this.router.navigate(['/login']);
    } else {
      let utilisateur: Utilisateur = new Utilisateur(
        this.formRegister.value['Nom'],
        this.formRegister.value['Prenom'],
        this.formRegister.value['utilisateur'],
        this.formRegister.value['Password'],
        [],
        this.formRegister.value['role']
      );
      this.service
        .registerUtilisateur(utilisateur)
        .subscribe((data) => console.log(data));
      this.router.navigate(['/login']);
    }
  }
}
