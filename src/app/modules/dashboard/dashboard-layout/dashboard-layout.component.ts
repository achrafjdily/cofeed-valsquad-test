import { Component, OnInit } from '@angular/core';
import { faBell, faSearch, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']

})
export class DashboardLayoutComponent implements OnInit {

  faSearch = faSearch;
  faBell = faBell;
  faUpload = faUpload;

  links = ['About', 'Help', 'Terms', 'Popular', 'Language'];

  constructor() { }

  ngOnInit(): void {
  }

}
