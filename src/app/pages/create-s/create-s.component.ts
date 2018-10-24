import { Component, OnInit } from '@angular/core';
import {SalariesService} from '../../services/salaries.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-s',
  templateUrl: './create-s.component.html',
  styleUrls: ['./create-s.component.css']
})
export class CreateSComponent implements OnInit {

  formCreate={
  nom:"",
  prenom:"",
  username:"",
  naissance:"",
  rue: 0,
  ville: "",
  adresse: "",
  poste: ""
  }

  constructor(private salariesService:SalariesService,private route:Router) {

  }

  ngOnInit() {
  }

  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createSalarie(){
  // on consomme notre service qui a comme arguments les valuers du formulaire
  this.salariesService
  .createSalarie(this.formCreate.nom,
                this.formCreate.prenom,
                this.formCreate.username,
                this.formCreate.naissance,
                this.formCreate.rue,
                this.formCreate.ville,
                this.formCreate.adresse,
                this.formCreate.poste);
  }

}
