import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertformComponent } from './insertform/insertform.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { SignupComponent } from './signup/signup.component';
import { ActionComponent } from './action/action.component';
import { CRUDComponent } from './crud/crud.component';
import { TotlformComponent } from './totlform/totlform.component';


const routes: Routes = [
  {
    path:'register',
    component:InsertformComponent
  },
  {
    path:'action',
    component:ActionComponent   
  },
  {
    path:'insertdata',
    component:InsertdataComponent

  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'crud',
    component:CRUDComponent

  },
  {
    path:'totalform',
    component:TotlformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
