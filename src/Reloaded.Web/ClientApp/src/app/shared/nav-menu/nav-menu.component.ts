import { Component } from '@angular/core';
import { OrderingService } from '@app/shared/pipes/ordering.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;

  menu: MenuLinks = {
    'Home': { path: '/', activeOptions: { exact: true } },
    'Firearms': { path: '/firearms', activeOptions: { exact: false } },
    'Reloads': { path: '/reloads', activeOptions: { exact: false } },
    'Results': { path: '/results', activeOptions: { exact: false } }
  };

  originalOrder = OrderingService.originalOrder;
}

type MenuLinks = { [key: string]: { path: string, activeOptions: { exact: boolean } } };
