// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';


// SERVICES
import { WebSocketService } from './core/services/web-socket/web-socket.service';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  title = 'chatApp';

  constructor(
    public webSocketService: WebSocketService
    ) {

  }





  
}
