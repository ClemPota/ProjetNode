import { Component, OnInit } from '@angular/core';
import {ProjetsService} from '../../services/projets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-p',
  templateUrl: './create-p.component.html',
  styleUrls: ['./create-p.component.css']
})
export class CreatePComponent implements OnInit {

  formCreate={
  nom:"",
  description:"",
  debut:"",
  fin:"",
  status:""
  }

  constructor(private projetsService:ProjetsService,private route:Router) {

  }

  ngOnInit() {
  }

  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createProjet(){
  // on consomme notre service qui a comme arguments les valuers du formulaire
  this.projetsService
  .createProjet(this.formCreate.nom,
                this.formCreate.description,
                this.formCreate.debut,
                this.formCreate.fin,
                this.formCreate.status);
  }
}
