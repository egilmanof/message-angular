import {Component, EventEmitter, Output} from '@angular/core';
import {Message} from "../app.component";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent {

  @Output() onAdd: EventEmitter<Message> = new EventEmitter<Message>();

  text: string = '';

  constructor() {
  }

  addMessage() {
    if (this.text.trim()) {
      const message: Message = {
        text: this.text
      }
      this.onAdd.emit(message);
      this.text = '';
    }

    this.text = '';
  }

}
