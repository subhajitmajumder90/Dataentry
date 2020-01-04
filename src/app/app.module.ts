import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertformComponent } from './insertform/insertform.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { SignupComponent } from './signup/signup.component';
import { ActionComponent } from './action/action.component';
import { CRUDComponent } from './crud/crud.component';
import { TotlformComponent } from './totlform/totlform.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertformComponent,
    InsertdataComponent,
    SignupComponent,
    ActionComponent,
    CRUDComponent,
    TotlformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
