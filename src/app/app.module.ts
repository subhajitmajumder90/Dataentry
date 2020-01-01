import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertformComponent } from './insertform/insertform.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { InsertdataComponent } from './insertdata/insertdata.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertformComponent,
    InsertdataComponent
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
