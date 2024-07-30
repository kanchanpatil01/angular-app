import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'mycomp',
    component: MycomponentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
