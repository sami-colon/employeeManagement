import { Component, OnInit } from '@angular/core';
import {DbService} from '../commonServices/db.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private dbService: DbService, private router: Router) { }
  employee = {id: 0, email: '', first_name: '', last_name: '', avatar: ''};
  ngOnInit() {
  }
  useDefaultImage(): void {
    this.employee.avatar = 'assets/images/default_avatar.PNG';
  }
  checkValidity(fname, lname, currEmail, avatar): boolean {
    return fname.checkValidity() && lname.checkValidity() && currEmail.checkValidity() && avatar.checkValidity();
  }
  addEmployee(): void {
    this.employee.id = Date.now();
    this.dbService.addEmployee(this.employee);
    this.router.navigateByUrl('/employees/');
  }
}
