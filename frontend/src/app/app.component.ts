import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RCMS';

  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'grid-outline',
    },
    {
      title: 'Editor',
      icon: 'layout-outline',
    },
    {
      title: 'Extensions',
      icon: 'pantone-outline',
    },
    {
      title: 'User',
      icon: 'person-outline',
    },
    {
      title: 'Settings',
      icon: 'settings-2-outline',
    },
    {
      title: 'Logout',
      icon: 'power-outline',
    },
  ];

}
