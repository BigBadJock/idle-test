import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeoutModalComponent } from './timeout-modal/timeout-modal.component';





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
    NgIdleKeepaliveModule.forRoot(),
    NgbModule,

  ],
  entryComponents:[
      TimeoutModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
