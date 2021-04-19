import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './page/staff.component';
import { SharedModule } from '../../shared/shared.module';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
  declarations: [StaffComponent],
  imports: [SharedModule, StaffRoutingModule],
})
export class StaffModule {}
