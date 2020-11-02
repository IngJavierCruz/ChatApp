// ANGULAR
import { Component, OnInit } from '@angular/core';


// SERVICES
import { WebSocketService } from 'src/app/core/services/web-socket/web-socket.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
  }

}
