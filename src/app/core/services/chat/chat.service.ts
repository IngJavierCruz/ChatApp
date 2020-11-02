// ANGULAR
import { Injectable } from '@angular/core';
import { WebSocketService } from '../web-socket/web-socket.service';



@Injectable({
  providedIn: 'root'
})
export class ChatService { 

  constructor(
    public webSocketService: WebSocketService
  ) {


  }



  sendMessage(message: string) {
    
    const payload = {
      autor: 'Javier Cruz',
      message: message
    };


    this.webSocketService.emit('message', payload);

  }


  getMessage() {
    return this.webSocketService.listen('new-message');
  }

}
