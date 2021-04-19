import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';

@NgModule({
  declarations: [SpinnerComponent, PageHeaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [MaterialModule, SpinnerComponent, PageHeaderComponent],
})
export class SharedModule {}
