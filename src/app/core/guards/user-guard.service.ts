// ANGULAR
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

// RXJS
import { Observable } from 'rxjs';


// SERVICES
import { WebSocketService } from '../services/web-socket/web-socket.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    public webSocketService: WebSocketService,
    public router: Router
  ) { }

  canActivate() {
    if (this.webSocketService.getUser()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
