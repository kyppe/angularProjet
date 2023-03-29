import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/class/utilisateur';
import { Vendeur } from 'src/app/class/vendeur';
import { AuthnficationService } from 'src/app/services/authnfication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder,private router: Router,private serviceath:AuthnficationService) { }
  formLogin!: FormGroup;
  ngOnInit(): void {
    this.formLogin = this.fb.nonNullable.group({
      username: [''],
      password: [''],

    });
  }
  async login()
  {
    let vendeur:Vendeur = new Vendeur("","",this.formLogin.value['username'],this.formLogin.value['password'],[],"")
    let utilisateur:Utilisateur = new Utilisateur("","",this.formLogin.value['username'],this.formLogin.value['password'],[],"")
    console.log(utilisateur.username)
    console.log(vendeur.username)

    await this.serviceath.loginVendeur(vendeur).subscribe(data => {
      vendeur=data
    
      if(data)
      {
        
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/seller']);
        
      }
    })
    await this.serviceath.loginUtilisateur(utilisateur).subscribe(data => {
      utilisateur=data

      if(data)
      {
       
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/shopping']);
      }
    })

  
   


  
  }
  gotoRegisterPage()
  {
    this.router.navigate(['/register']);
  }
}
