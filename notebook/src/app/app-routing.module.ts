import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponentComponent } from './child-acomponent/child-acomponent.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
    { path: 'first-component', component: FirstComponent,children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponentComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildAComponentComponent, // another child route component that the router renders
      },
    ], },
    { path: 'second-component', component: SecondComponent },
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponentComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
