import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'login',component:LoginComponent,
},
{
  path:'register',component:RegisterComponent
},{
  path:'',component:HomeNavComponent,pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
