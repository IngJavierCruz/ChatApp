import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// COMPONENTS
import { AppComponent } from './app.component';

// ENVIROMENT
import { environment } from '../environments/environment';


// SOCKET MODULE AND CONFIG INIT
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


// COMPONETS
import { FooterComponent } from './features/footer/footer.component';
import { ChatComponent } from './features/chat/chat.component';

const config: SocketIoConfig = {
  url: environment.urlServerSocket, 
  options: {}
};



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
