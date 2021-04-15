import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { LoggerService } from './core/core/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    if (environment.production) {
      LoggerService.enableProductionMode();
    }
  }
}
