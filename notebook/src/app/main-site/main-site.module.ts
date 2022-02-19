import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSiteRoutingModule } from './main-site-routing.module';
import { MainSiteComponent } from './main-site.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainSiteComponent],
  imports: [CommonModule, MainSiteRoutingModule, SharedModule],
})
export class MainSiteModule {}
