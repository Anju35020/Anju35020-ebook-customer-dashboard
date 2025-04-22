import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // This tells Angular it's a standalone component
  imports: [RouterOutlet],  // Add any other necessary imports here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Use styleUrls for CSS
})
export class AppComponent {
  title = 'ebook-dashboard';
}
