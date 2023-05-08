import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../layout/nav/nav.component';
import { RouterModule } from '@angular/router';

const components = [
  NavComponent
];
const modules = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule
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
