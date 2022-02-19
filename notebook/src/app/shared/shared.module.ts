import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoderComponent } from './loder/loder.component';
import { DemomaterialModule } from '../demomaterial/demomaterial.module';
import { ShowErrComponent } from './show-err/show-err.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoderComponent, ShowErrComponent, HeaderComponent],
  imports: [CommonModule, DemomaterialModule, RouterModule],
  exports: [LoderComponent, ShowErrComponent, HeaderComponent, RouterModule],
})
export class SharedModule {}
