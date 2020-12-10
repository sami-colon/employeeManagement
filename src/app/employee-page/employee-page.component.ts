import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DbService} from '../commonServices/db.service';
import {MatPaginator} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private dbService: DbService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.currentId = params.id;
      if (this.currentId && this.currentId > 0) {
        this.showAllData = false;
      }
    });
  }
  employeesData = [];
  dataSource = [];
  showAllData = true;
  currentId = -1;
  ngOnInit() {
    this.employeesData = this.dbService.getDb();
    if (this.showAllData) {
      this.dataSource = this.employeesData.slice(0, 8);

    }
  }
  ngAfterViewInit() {
    if (this.showAllData) {
      this.paginator.page.subscribe(data => {
        console.log(data, data.pageIndex, data.length);
        this.dataSource = this.employeesData.slice(data.pageIndex * 8, data.pageIndex * 8 + 8);
      }, error => {
        console.log(error);
        this.dataSource = this.employeesData.slice(0, 8);
      });
    }
  }
}
