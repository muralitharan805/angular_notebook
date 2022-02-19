import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoderComponent } from './loder/loder.component';
import { DemomaterialModule } from '../demomaterial/demomaterial.module';
import { ShowErrComponent } from './show-err/show-err.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [LoderComponent, ShowErrComponent, HeaderComponent],
  imports: [CommonModule, DemomaterialModule],
  exports: [LoderComponent, ShowErrComponent, HeaderComponent],
})
export class SharedModule {}
