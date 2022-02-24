import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoderComponent } from './loder/loder.component';
import { DemomaterialModule } from '../demomaterial/demomaterial.module';
import { ShowErrComponent } from './show-err/show-err.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
<<<<<<< HEAD
=======
import { SideNavHeaderComponent } from './side-nav-header/side-nav-header.component';
>>>>>>> a08d3983850fd7b76f493e8dd23c8c4510676394

@NgModule({
  declarations: [
    LoderComponent,
    ShowErrComponent,
    HeaderComponent,
    SideNavComponent,
  ],
  imports: [CommonModule, DemomaterialModule, RouterModule],
  exports: [
    LoderComponent,
    ShowErrComponent,
    HeaderComponent,
    RouterModule,
    SideNavComponent,
  ],
})
export class SharedModule {}
