import { Component } from '@angular/core';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {
  letterNumber: number = 0

  userInput: string = ''

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.userInput = value
  }
}
