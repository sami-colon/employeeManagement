import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() employee;

  ngOnInit() {
  }
  useDefaultImage(): void {
    this.employee.avatar = 'assets/images/default_avatar.PNG';
  }
  openUpdate(id): void {
    this.router.navigateByUrl('/employees/add/new').then(x => this.router.navigateByUrl(`/employees/${id}`));
  }
}
