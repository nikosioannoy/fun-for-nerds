import { Component, Input } from '@angular/core';
import { InputBoxComponent } from '../input-box/input-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [InputBoxComponent],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css'
})
export class WordListComponent {
  @Input() oddWordsList: string[];
  @Input() userInput: string = '';


  
  
}
