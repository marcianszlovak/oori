import { NgModule } from '@angular/core';
import { ConsultationComponent } from './page/consultation.component';
import { SharedModule } from '../../shared/shared.module';
import { ConsultationRoutingModule } from './consultation-routing.module';

@NgModule({
  declarations: [ConsultationComponent],
  imports: [SharedModule, ConsultationRoutingModule],
})
export class ConsultationModule {}
