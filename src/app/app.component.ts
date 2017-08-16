import { Component } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id:{{hero.id}}</label></div>
    <div>
      <label>name:</label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1, name: 'Windstorm'
  };
}

