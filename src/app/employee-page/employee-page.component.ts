import { Component, OnInit } from '@angular/core';
import {DbService} from '../commonServices/db.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  constructor(private dbService: DbService) { }
  employeesData = [];
  ngOnInit() {
    this.employeesData = this.dbService.getDb();
  }

}
