import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-c',
  templateUrl: './update-c.component.html',
  styleUrls: ['./update-c.component.css']
})
export class UpdateCComponent implements OnInit {

  client;
  clientId;
  formUpdate={
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

constructor(private clientsService:ClientsService,private route:ActivatedRoute) {
    this.route.params.subscribe((params) => {
        this.clientId=params['id'];
    })

    this.clientsService.getClient(this.clientId).subscribe(client=>{

        this.client=client;
        console.log(this.client);

    });
}

ngOnInit() {
}
updateClient(id){
    this.clientsService
    .updatedClient(this.formUpdate.nom_entreprise,
                                    this.formUpdate.rue,
                                    this.formUpdate.adresse,
                                    this.formUpdate.ville,
                                    this.formUpdate.code_postal,
                                    this.formUpdate.nom,
                                    this.formUpdate.prenom,
                                    this.formUpdate.tel,
                                    this.formUpdate.mail,
                                    this.formUpdate.secteur,
                                    this.userId)
}

}
