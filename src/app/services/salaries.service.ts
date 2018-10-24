import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SalariesService {

  apiUrl="http://localhost:3000/salaries/";

  datatopost;

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   })};

    constructor(private http:HttpClient,private router:Router) {

    }

  // get all users
  getSalaries(){
      return this.http.get(this.apiUrl);
  }

  // get one user by Id
  getSalarie(id){
      return this.http.get(this.apiUrl+id);
  }

  // create a user
  createSalarie(nom,prenom,username,naissance,rue,ville,adresse,poste){
      // body envoyé dans la requête, appelé payload
      const payload =
          {
            "nom": nom,
            "prenom": prenom,
            "username": username,
            "naissance": naissance,
            "rue" : rue,
            "ville" : ville,
            "adresse" : adresse,
            "poste" : poste,
          }

      // conversion en jSON
      this.datatopost=JSON.stringify(payload);

      // requête http en post qui renvoie resp ou err
      return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
          res =>{
              console.log(res);
          },
          err => {
              console.log(err.message);
          }
      );
  }

  // mise à jour user
  updatedUser(nom,prenom,username,naissance,rue,ville,adresse,poste,id){

      // body envoyé dans la requête, appelé payload
      const payload =
          {
            "nom": nom,
            "prenom": prenom,
            "username": username,
            "naissance": naissance,
            "rue" : rue,
            "ville" : ville,
            "adresse" : adresse,
            "poste" : poste,
          }

          // conversion en JSON
          this.datatopost=JSON.stringify(payload);

          // requête http en post qui renvoie resp ou err
          return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
              res =>{
                  console.log(res);
              },
              err => {
                  console.log(err.message);
              }
          );

  }

  // suppression d'un user
  delete(id){
      return this.http.delete(this.apiUrl+id);
  }
}
