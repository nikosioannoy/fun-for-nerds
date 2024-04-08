import { Component } from '@angular/core';
import { InputBoxComponent } from './components/input-box/input-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
