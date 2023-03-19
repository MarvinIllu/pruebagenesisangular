import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Municipio } from './municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private url='http://localhost:8083/api/municipio';

  constructor(private httpClient: HttpClient, private router:Router) { }

  getMunicipios(idDepto:number){
    return this.httpClient.get<Municipio[]>(`${this.url+'/bydepto/'+ idDepto}`)
  }
}
