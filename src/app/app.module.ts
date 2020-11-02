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
import { ListUsersComponent } from './features/list-users/list-users.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';


// ROUTE MODULE
import { AppRoutingModule } from './app-routing.module';


const config: SocketIoConfig = {
  url: environment.urlServerSocket, 
  options: {}
};



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListUsersComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
