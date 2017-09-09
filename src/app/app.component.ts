import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Pokeviewer</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/pokemon" routerLinkActive="active">Pokemon</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
