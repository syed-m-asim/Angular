import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentForm } from './student-form/student-form';

@Component({
  imports: [RouterOutlet,StudentForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Home');
}
