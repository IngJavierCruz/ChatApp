import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// COMPONENTS
import { AppComponent } from './app.component';

// ENVIROMENT
import { environment } from '../environments/environment';


// SOCKET MODULE AND CONFIG INIT
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: environment.urlServerSocket, 
  options: {}
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
