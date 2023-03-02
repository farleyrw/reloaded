import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;

  menu: { [key: string]: string } = {
    'Home': '/',
    'Firearms': '/firearms',
    'Reloads': '/reloads'
  };

  originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>) => 0;
}
