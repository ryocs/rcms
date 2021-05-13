import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TranslatePipe
  ]
})
export class SharedModule { }
