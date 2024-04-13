import { Component, Input } from '@angular/core';
import { InputBoxComponent } from '../input-box/input-box.component';

@Component({
  selector: 'app-word-list-even',
  standalone: true,
  imports: [InputBoxComponent],
  templateUrl: './word-list-even.component.html',
  styleUrl: './word-list-even.component.css'
})
export class WordListEvenComponent {
  @Input() evenWordsList: string[]
  @Input() userInput: string = '' 

}
