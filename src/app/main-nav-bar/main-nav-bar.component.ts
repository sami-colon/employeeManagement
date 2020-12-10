import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  constructor(private router: Router) { }
  isEmployeeTab = true;
  isAddEmployeeTab = false;
  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        // example: NavigationStart, RoutesRecognized, NavigationEnd
        if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.isEmployeeTab = false;
          this.isAddEmployeeTab = false;
          if (event.urlAfterRedirects === '/employees/add/new') {
            this.isAddEmployeeTab = true;
          } else {
            this.isEmployeeTab = true;
          }
        }
      });
  }
  openMe(inp): void {
    this.isEmployeeTab = false;
    this.isAddEmployeeTab = false;
    if (inp === 1) {
      this.isEmployeeTab = true;
      this.router.navigateByUrl('/employees/add/new').then(x => this.router.navigateByUrl('/employees/'));
    }
    if (inp === 2) {
      this.isAddEmployeeTab = true;
      this.router.navigateByUrl('/employees/').then(x => this.router.navigateByUrl('/employees/add/new'));
    }
  }
}
