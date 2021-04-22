import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeNav1Component } from './home-nav1/home-nav1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'login',component:LoginComponent,
},
{
  path:'register',component:RegisterComponent
},{
  path:'',component:HomeNav1Component,pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
