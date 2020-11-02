// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';


// RXJS
import { Subscription } from 'rxjs';


// SERVICES
import { ChatService } from 'src/app/core/services/chat/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  text = ''
  chatMessages: any[] = [];
  subscription: Subscription = new Subscription();

  element: HTMLElement;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {

    this.element = document.getElementById('chat-message');
    
    this.subscription.add(this.chatService.getMessage()
    .subscribe(msg => {
      
      this.chatMessages.push(msg)
      console.log(msg);

      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);

    }));

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  send() {

    if (this.text.trim().length === 0) {
      return;
    }
    
    this.chatService.sendMessage(this.text);
    this.text = '';
  }

}
