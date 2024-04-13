import { Component, Input } from '@angular/core';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { WordListEvenComponent } from './components/word-list-even/word-list-even.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputBoxComponent, WordListComponent, WordListEvenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
