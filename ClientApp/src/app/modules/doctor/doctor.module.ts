import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './page/doctor.component';
import { SharedModule } from '../../shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';

@NgModule({
  declarations: [DoctorComponent],
  imports: [SharedModule, DoctorRoutingModule],
})
export class DoctorModule {}
