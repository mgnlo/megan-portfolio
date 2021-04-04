import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { PhotographyComponent } from './photography/photography.component';
import { DrawingComponent } from './drawing/drawing.component';
import { MockupComponent } from './mockup/mockup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RwdWebsiteComponent } from './rwd-website/rwd-website.component';
import { PsPhotoComponent } from './ps-photo/ps-photo.component';

const routes: Routes = [
  {path: '', component: HomeComponent, runGuardsAndResolvers: 'always'},
  {path: 'photography', component: PhotographyComponent, runGuardsAndResolvers: 'always'},
  {path: 'drawing', component: DrawingComponent, runGuardsAndResolvers: 'always'},
  {path: 'mockup', component: MockupComponent, runGuardsAndResolvers: 'always'},
  {path: 'about', component: AboutComponent, runGuardsAndResolvers: 'always'},
  {path: 'rwd-website', component: RwdWebsiteComponent, runGuardsAndResolvers: 'always'},
  {path: 'ps-photo', component: PsPhotoComponent, runGuardsAndResolvers: 'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
