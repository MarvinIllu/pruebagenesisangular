import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipioService } from '../municipio.service';

@Component({
  selector: 'app-municipio-list',
  templateUrl: './municipio-list.component.html',
  styleUrls: ['./municipio-list.component.css']
})
export class MunicipioListComponent implements OnInit {
  Municipio:any;
  deptoId: any;
  
  constructor(private municipioService:MunicipioService, 
    private route:ActivatedRoute,  
    private activeRute:ActivatedRoute){
      this.deptoId=this.activeRute.snapshot.paramMap.get('deptoId');
      console.log(this.deptoId);
    }

  ngOnInit(): void {
    this.getMunicipios(this.deptoId)
      
  }


  getMunicipios(deptoId:number){
    this.municipioService.getMunicipios(deptoId).subscribe(data=>{
      this.Municipio = data;
    })
  }
}
