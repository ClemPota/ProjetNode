import { Component, OnInit } from '@angular/core';
import { SalariesService } from '../../services/salaries.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-update-s',
  templateUrl: './update-s.component.html',
  styleUrls: ['./update-s.component.css']
})
export class UpdateSComponent implements OnInit {

  salarie;
  salarieId;
  formUpdate={
    nom:"",
    prenom:"",
    username:"",
    naissance:"",
    rue: 0,
    ville: "",
    adresse: "",
    poste: ""
  }

constructor(private salariesService:SalariesService,private route:ActivatedRoute) {
    this.route.params.subscribe((params) => {
        this.salarieId=params['id'];
    })

    this.salariesService.getSalarie(this.salarieId).subscribe(salarie=>{

        this.salarie=salarie;
        console.log(this.salarie);

    });
}

ngOnInit() {
}
updateSalarie(id){
    this.salariesService
    .updatedSalarie(this.formUpdate.nom,
                  this.formUpdate.prenom,
                  this.formUpdate.username,
                  this.formUpdate.naissance,
                  this.formUpdate.rue,
                  this.formUpdate.ville,
                  this.formUpdate.adresse,
                  this.formUpdate.poste,
                  this.userId)
}

}
