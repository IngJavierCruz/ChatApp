// ANGULAR
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// SERVICES
import { WebSocketService } from 'src/app/core/services/web-socket/web-socket.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = '';
  constructor(
    public webSocketService: WebSocketService,
    public router: Router
    ) { }

  ngOnInit(): void {
  }


  signin() {
    this.webSocketService.loginWS(this.name)
    .then( () => {

      this.router.navigateByUrl('/messages');

    }); 
  }

}
