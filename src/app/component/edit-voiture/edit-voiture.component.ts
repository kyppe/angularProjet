import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/class/voiture';
import { VendeurService } from 'src/app/services/vendeur.service';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-edit-voiture',
  templateUrl: './edit-voiture.component.html',
  styleUrls: ['./edit-voiture.component.css']
})
export class EditVoitureComponent implements OnInit {
  formEdit!:FormGroup
  constructor(private fb: FormBuilder,private service:VendeurService,private router: Router,private voitureService:VoitureService,public activeroute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.formEdit = this.fb.nonNullable.group({
      type: [''],
      prix: [''],
      marque: ['Nissan'],
      img: [''],
      statut: ['encour'],
      color: [''],
      description:['']
    });
    let id:Number = this.activeroute.snapshot.params['id']
    this.voitureService.getVoitureById(id).subscribe(data => {
      console.log(data)
      this.formEdit = this.fb.nonNullable.group({
        type: data.type,
        prix: data.prix,
        marque: data.marque,
        img: data.img,
        statut: data.statut,
        color: data.color,
        description:data.description
  
      });
    })
  }
  edite()
  {
    let voiture:Voiture=this.formEdit.value
    voiture.id=this.activeroute.snapshot.params['id']
    this.voitureService.EditeVoitureById(voiture).subscribe(data =>{ console.log(data)
      this.router.navigate(['/seller']);
    })
    
  }

}
