import { Component, EventEmitter, Output } from '@angular/core';
import { WordListComponent } from '../word-list/word-list.component';
import { WordListEvenComponent } from '../word-list-even/word-list-even.component';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [WordListComponent, WordListEvenComponent],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {
  currentWord: string = ''
  currentOddWordParent = ''
  currentEvenWordParent = ''
  oddWordsParent: string[] = []
  evenWordsParent: string[] = []


  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.currentWord = value
    if (this.currentWord.length % 2 !== 0) {
      this.currentOddWordParent = this.currentWord
      this.currentEvenWordParent = ''
    } else {
      this.currentOddWordParent = ''
      this.currentEvenWordParent = this.currentWord
    }
  }

  onSubmit() {
    console.log(this.currentWord)
    if (this.currentWord.length > 0) {
      if (this.currentWord.length % 2 !== 0) {
        this.oddWordsParent.push(this.currentWord)
      } else {
        this.evenWordsParent.push(this.currentWord)
      }
    }  
  }

}
