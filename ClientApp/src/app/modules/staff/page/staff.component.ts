import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  doctors = 'Orvosaink';
  staff = 'Munkatársaink';
  constructor() {}

  ngOnInit(): void {}
}
