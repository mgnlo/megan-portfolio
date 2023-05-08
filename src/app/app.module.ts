import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';
import 'mousetrap';
import { ChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawingComponent } from './drawing/drawing.component';
import { HomeComponent } from './home/home.component';
import { MockupComponent } from './mockup/mockup.component';
import { PhotographyComponent } from './photography/photography.component';
import { PsPhotoComponent } from './ps-photo/ps-photo.component';
import { RwdWebsiteComponent } from './rwd-website/rwd-website.component';
import { ShareModule } from './shared/module/share.module';
import { LoadingService } from './shared/service/loading.service';

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
  providers: [
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
