import { Component } from '@angular/core';

export interface Message {
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: Message[] = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, omnis!'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, omnis!'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, omnis!'}
  ];

  updateMessage(value: Message): void {
    this.messages.unshift(value);
  }

}

