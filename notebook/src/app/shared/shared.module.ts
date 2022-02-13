import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoderComponent } from './loder/loder.component';
import { DemomaterialModule } from '../demomaterial/demomaterial.module';
import { ShowErrComponent } from './show-err/show-err.component';

@NgModule({
  declarations: [LoderComponent, ShowErrComponent],
  imports: [CommonModule, DemomaterialModule],
  exports: [LoderComponent, ShowErrComponent],
})
export class SharedModule {}
