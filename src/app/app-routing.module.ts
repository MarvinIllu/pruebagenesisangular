import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptoAddComponent } from './depto-add/depto-add.component';
import { DeptoDetailsComponent } from './depto-details/depto-details.component';
import { DeptoListComponent } from './depto-list/depto-list.component';
import { MunicipioListComponent } from './municipio-list/municipio-list.component';

const routes: Routes = [
  {path: '',component:DeptoListComponent},
  {path: '',redirectTo:'departamento',pathMatch:'full'},
  {path: 'depto-add', component:DeptoAddComponent},
  {path: 'municipio/:deptoId', component: MunicipioListComponent},
  {path: 'departamento-details', component: DeptoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
