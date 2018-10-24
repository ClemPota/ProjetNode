import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiUrl="http://localhost:3000/clients/";

  datatopost;

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   })};

    constructor(private http:HttpClient,private router:Router) {

    }

  // get all users
  getClients(){
      return this.http.get(this.apiUrl);
  }

  // get one user by Id
  getClient(id){
      return this.http.get(this.apiUrl+id);
  }

  // create a user
  createClient(nom_entreprise,rue,adresse,ville,code_postal,nom,prenom,tel,mail,secteur){
      // body envoyé dans la requête, appelé payload
      const payload =
          {
            "nom_entreprise":nom_entreprise,
              "rue" : rue,
              "adresse" : adresse,
              "ville" : ville,
              "code_postal" : code_postal,
              "nom" : nom,
              "prenom" : prenom,
              "tel" : tel,
              "mail" : mail,
            "secteur" : secteur
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
  updatedClient(nom_entreprise,rue,adresse,ville,code_postal,nom,prenom,tel,mail,secteur,id){

      // body envoyé dans la requête, appelé payload
      const payload =
      {
        "nom_entreprise":nom_entreprise,
          "rue" : rue,
          "adresse" : adresse,
          "ville" : ville,
          "code_postal" : code_postal,
          "nom" : nom,
          "prenom" : prenom,
          "tel" : tel,
          "mail" : mail,
        "secteur" : secteur
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
