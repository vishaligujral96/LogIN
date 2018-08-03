import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AppRoutingModule } from './/app-routing.module';


import { DataComponent } from './data/data.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { UserService } from './user.service';





@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    DataComponent,
    EditdetailsComponent,

    
  ],
  imports: [
    BrowserModule,

    
  ReactiveFormsModule,

    
  AppRoutingModule
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
