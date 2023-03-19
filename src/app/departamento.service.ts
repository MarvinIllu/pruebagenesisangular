import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private url='http://localhost:8083/api/departamento';

  constructor(private httpClient: HttpClient, private router:Router) { }

  getDepartamento():Observable<Departamento[]>{
    return this.httpClient.get<Departamento[]>(`${this.url+'/all'}`)
  }

  newDepto(){
    this.router.navigate(['depto-add']);
  }
  //this.router.navigate(['municipios',id]);
}
