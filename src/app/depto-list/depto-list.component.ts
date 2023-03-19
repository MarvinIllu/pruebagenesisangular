import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-depto-list',
  templateUrl: './depto-list.component.html',
  styleUrls: ['./depto-list.component.css']
})

export class DeptoListComponent implements OnInit {
  Departamento:any;

  constructor(private departamentoService:DepartamentoService, private router:Router ){}

    ngOnInit(): void{
      this.getDepartamentos();
      
    }

    private getDepartamentos(){
      this.departamentoService.getDepartamento().subscribe(data =>{
        console.log("obtener deptos");
        this.Departamento = data;
      });
    }

    newDepto(){
      this.departamentoService.newDepto();
    }

    getMunicipioByDeptoId(deptoId:number){
      this.router.navigate(['municipio',deptoId])
    };
}
