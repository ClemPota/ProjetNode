import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../../services/projets.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.component.html',
  styleUrls: ['./update-p.component.css']
})
export class UpdatePComponent implements OnInit {

  projet;
  projetId;
  formUpdate={
    nom:"",
    description:"",
    debut:"",
    fin:"",
    status:""
  }

constructor(private projetsService:ProjetsService,private route:ActivatedRoute) {
    this.route.params.subscribe((params) => {
        this.projetId=params['id'];
    })

    this.projetsService.getProjet(this.projetId).subscribe(projet=>{

        this.projet=projet;
        console.log(this.projet);

    });
}

ngOnInit() {
}
updateProjet(id){
    this.projetsService
    .updatedProjet(this.formUpdate.nom,
                  this.formUpdate.description,
                  this.formUpdate.debut,
                  this.formUpdate.fin,
                  this.formUpdate.status,
                  this.userId)
}

}
