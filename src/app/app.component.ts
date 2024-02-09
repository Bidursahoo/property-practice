import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponentComponent } from './practice-component/practice-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , PracticeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'property-practice';
}
