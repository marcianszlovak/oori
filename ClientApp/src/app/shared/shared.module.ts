import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './component/image/image.component';

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [MaterialModule, ImageComponent],
})
export class SharedModule {}
