import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertformComponent } from './insertform/insertform.component';
import { InsertdataComponent } from './insertdata/insertdata.component';


const routes: Routes = [
  {
    path:'signup',
    component:InsertformComponent
  },
  {
    path:'insertdata',
    component:InsertdataComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
