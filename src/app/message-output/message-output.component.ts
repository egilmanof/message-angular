import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../app.component";

@Component({
  selector: 'app-message-output',
  templateUrl: './message-output.component.html',
  styleUrls: ['./message-output.component.scss']
})
export class MessageOutputComponent implements OnInit {

  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
