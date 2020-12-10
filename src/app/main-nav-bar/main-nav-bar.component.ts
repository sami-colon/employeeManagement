import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  constructor() { }
  isEmployeeTab = true;
  isAddEmployeeTab = false;
  ngOnInit() {
  }
  openMe(inp): void {
    this.isEmployeeTab = false;
    this.isAddEmployeeTab = false;
    if (inp === 1) {
      this.isEmployeeTab = true;
    }
    if (inp === 2) {
      this.isAddEmployeeTab = true;
    }
  }
}
