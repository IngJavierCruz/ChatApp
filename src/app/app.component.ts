// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ChatService } from './core/services/chat/chat.service'

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'chatApp';

  constructor(public chatService: ChatService) {

  }


  ngOnInit(): void {
  }



  
}
