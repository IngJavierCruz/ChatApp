import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/core/services/web-socket/web-socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    public webSocketService: WebSocketService
  ) { 

  }

  ngOnInit(): void {
  }

  
  logout() {
    this.webSocketService.logout();
  }
}
