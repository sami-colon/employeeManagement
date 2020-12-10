import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  constructor() { }
  @Input() employee;

  ngOnInit() {
  }
  useDefaultImage(): void {
    this.employee.avatar = 'assets/images/default_avatar.PNG';
  }
}
