import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MomentModule } from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeoutModalComponent } from './timeout-modal/timeout-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TimeoutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    MomentModule,
    NgbModule,
    NgIdleKeepaliveModule.forRoot(),
    
  ],
  entryComponents:[TimeoutModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
