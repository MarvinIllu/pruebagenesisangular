import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-depto-add',
  templateUrl: './depto-add.component.html',
  styleUrls: ['./depto-add.component.css']
})
export class DeptoAddComponent implements OnInit {
  formDepto:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private deptoService:DepartamentoService,
    private ruteador:Router
  ){
    this.formDepto=this.formulario.group({
      nombre:['']
    })
  }

  ngOnInit(): void {
      
  }

  saveDepto():any{
    console.log("guardar depto");
  }

}
