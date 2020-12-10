import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DbService} from '../commonServices/db.service';
import {MatPaginator} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private dbService: DbService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.currentId = params.id;
      if (this.currentId && parseInt(this.currentId, 10) > 0) {
        this.showAllData = false;
        console.log(this.currentId);
      }
    });
  }
  employeesData = [];
  dataSource = [];
  showAllData = true;
  currentId = '';
  currentEmployee = [];
  ngOnInit() {
    this.employeesData = this.dbService.getDb();
    if (this.showAllData) {
      this.dataSource = this.employeesData.slice(0, 8);
    } else {
      this.currentEmployee = this.employeesData.filter(x => x.id.toString() === this.currentId);
      console.log(this.currentEmployee);
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
  removeEmployee(id): void {
    this.dbService.removeEmployee(id);
    this.router.navigateByUrl('/employees/add/new').then(x => this.router.navigateByUrl('/employees/'));
  }
  updateEmployee(id, emp): void {
    this.dbService.updateEmployee(id, emp[0]);
    this.router.navigateByUrl('/employees/add/new').then(x => this.router.navigateByUrl('/employees/'));
  }
  checkValidity(fname, lname, currEmail): boolean {
    return fname.checkValidity() && lname.checkValidity() && currEmail.checkValidity();
  }
  useDefaultImage(): void {
    this.currentEmployee[0].avatar = 'assets/images/default_avatar.PNG';
  }
}
