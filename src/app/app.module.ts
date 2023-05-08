import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import 'mousetrap';
import {Angular2PhotoswipeModule} from 'angular2_photoswipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotographyComponent } from './photography/photography.component';
import { DrawingComponent } from './drawing/drawing.component';
import { MockupComponent } from './mockup/mockup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RwdWebsiteComponent } from './rwd-website/rwd-website.component';
import { PsPhotoComponent } from './ps-photo/ps-photo.component';
import { ShareModule } from './shared/module/share/share.module';
@NgModule({
  declarations: [
    AppComponent,
    PhotographyComponent,
    DrawingComponent,
    MockupComponent,
    HomeComponent,
    AboutComponent,
    RwdWebsiteComponent,
    PsPhotoComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Angular2PhotoswipeModule,
    ShareModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
