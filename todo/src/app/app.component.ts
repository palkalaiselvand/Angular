import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  todos: Array<string> = [];

  constructor() {
    this.todos.push('Workout new');
  }

  buttonClicked() {
    this.todos.push('Workout '+(this.todos.length).toString());
  }
}
