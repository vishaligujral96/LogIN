import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
const routes: Routes = [
  { path: '', component:ReactiveformComponent },
  { path: 'showData', component: DataComponent },
  
  { path: 'reactiveform', component: ReactiveformComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes) 

  ],
  exports: [ RouterModule ]
  

  
  
})
export class AppRoutingModule { 
 
}
