import { Component } from '@angular/core';
import { OrderingService } from '../pipes/ordering.service';

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
    'Reloads': '/reloads',
    'Results': '/results'
  };

  originalOrder = OrderingService.originalOrder;
}
