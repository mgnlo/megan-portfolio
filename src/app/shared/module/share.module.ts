import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../layout/loading/loading.component';
import { NavComponent } from '../layout/nav/nav.component';

const components = [
  NavComponent,
  LoadingComponent
];
const modules = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ],
})
export class ShareModule { }
