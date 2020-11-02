// ANGULAR
import { Injectable } from '@angular/core';

// SOCKET
import { Socket } from 'ngx-socket-io';


// MODELS
import { User } from 'src/app/class/user';



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;
  public user: User;


  constructor(
    private socket: Socket
    ) { 
    this.checkStatus();
    this.loadStorage();
  }



  checkStatus() {

    this.socket.on('connect', () => {
      console.log('Connected to server');
      this.socketStatus = true;
    });


    this.socket.on('disconnect', () => {
      console.log('Disconected to server');
      this.socketStatus = false;
    });


  }


  emit(event: string, payload?: any, callback?: Function) {

    this.socket.emit(event, payload, callback);

  }


  listen(event: string) {
    return this.socket.fromEvent(event);
  }


  loginWS(name: string) {

    return new Promise((resolve, reject) => {

      this.emit('config-user', { name }, (res: any) => {
  
        this.user = new User(name);
        this.saveStorage(this.user)
        resolve();
  
      });

    });

  }


  saveStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadStorage() {

    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loginWS(this.user.name)
    }

  }


  getUser() {
    return this.user;
  }

  
}
