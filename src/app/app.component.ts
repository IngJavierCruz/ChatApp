// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';


// SERVICES
import { WebSocketService } from './core/services/web-socket/web-socket.service';
import { ChatService } from './core/services/chat/chat.service';
import { Subscription } from 'rxjs';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'chatApp';
  subscription: Subscription = new Subscription();

  constructor(
    public webSocketService: WebSocketService,
    public chatService: ChatService
    ) {

  }


  ngOnInit(): void {
    this.subscription.add(this.chatService.getMessagePrivate()
    .subscribe(msg => {

      console.log(msg);

    }));


  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }










  
}
