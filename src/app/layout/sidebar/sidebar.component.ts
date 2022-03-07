import { MENU } from './menu';
import { MenuItem } from './../../shared/models/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[] = MENU;
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
