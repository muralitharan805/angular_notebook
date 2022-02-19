import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemomaterialModule } from './demomaterial/demomaterial.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService, NoopInterceptor } from './http-interceptor';
import { LoggingIntercepter } from './logging-interceptor';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DemomaterialModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoggingIntercepter, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
