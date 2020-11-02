// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONETS 
import { MessagesComponent } from './pages/messages/messages.component';
import { LoginComponent } from './pages/login/login.component';


// GUARD
import { UserGuard } from './core/guards/user-guard.service';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'messages', 
    component: MessagesComponent,
    canActivate: [UserGuard]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
