import { Component, OnInit } from '@angular/core';
import {ProjetsService} from '../../services/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets;

  constructor(private projetsService:ProjetsService) {
    this.projetsService.getProjets().subscribe(projets=>{
      this.projets=projets;
      console.log(projets);
    })
   }

  ngOnInit() {

  }

  deleteProjet(id){
    this.projetsService
    .delete(id).subscribe(resp=>{
      console.log(resp);
    });
    location.reload();
  }

}
