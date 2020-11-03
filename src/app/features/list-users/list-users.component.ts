// ANGULAR
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


// SERVICES
import { ChatService } from 'src/app/core/services/chat/chat.service';



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  activeUsers: Observable<any>;

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    this.activeUsers = this.chatService.getActiveUsers();
    this.chatService.emitActiveUsers();
  }

 

}
