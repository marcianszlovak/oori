import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatListModule, MatButtonModule],
  exports: [CommonModule, MatListModule, MatButtonModule],
})
export class MaterialModule {}
