import { Component } from '@angular/core';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { WordListComponent } from './components/word-list/word-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputBoxComponent, WordListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
