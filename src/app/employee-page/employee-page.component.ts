import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DbService} from '../commonServices/db.service';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private dbService: DbService) { }
  employeesData = [];
  dataSource = [];
  ngOnInit() {
    this.employeesData = this.dbService.getDb();
    this.dataSource = this.employeesData.slice(0, 8);
  }
  ngAfterViewInit() {
    this.paginator.page.subscribe(data => {
      console.log(data, data.pageIndex, data.length);
      this.dataSource = this.employeesData.slice(data.pageIndex * 8, data.pageIndex * 8 + 8);
    }, error => {
      console.log(error);
      this.dataSource = this.employeesData.slice(0, 8);
    });
  }
}
