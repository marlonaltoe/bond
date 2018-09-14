import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';

/*
  Generated class for the BondProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BondProvider {

  private baseApiPath = "http://localhost:63431"; //urlBase
  
     
  constructor(public http: HttpClient) {
    console.log('Hello BondProvider Provider');
  }

  postUser(body : any){
    //body = "{\"cdusuario\": 18,\"nome\": \"Caroline\",\"tppessoa\": \"F\",\"login\": \"carolpo\",\"senha\": \"12345\",\"email\": \"teste\",\"nrcpfcnpj\": \"11111111\"}";
    return this.http.post(this.baseApiPath + "/api/Usuario",body);
  }

}
