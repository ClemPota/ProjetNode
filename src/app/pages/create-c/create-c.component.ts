import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-c',
  templateUrl: './create-c.component.html',
  styleUrls: ['./create-c.component.css']
})
export class CreateCComponent implements OnInit {

  formCreate={
    nom_entreprise: "",
      rue : 0,
      adresse: "",
      ville : "",
      code_postal : 0,
      nom : "",
      prenom : "",
      tel : 0,
      mail : "",
    secteur : ""
  }

  constructor(private clientsService:ClientsService,private route:Router) {

  }

  ngOnInit() {
  }

  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createClient(){
  // on consomme notre service qui a comme arguments les valuers du formulaire
  this.clientsService.createClient(this.formCreate.nom_entreprise,
                                  this.formCreate.rue,
                                  this.formCreate.adresse,
                                  this.formCreate.ville,
                                  this.formCreate.code_postal,
                                  this.formCreate.nom,
                                  this.formCreate.prenom,
                                  this.formCreate.tel,
                                  this.formCreate.mail,
                                  this.formCreate.secteur);
  }

}
