import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NoticesComponent } from './components/notices/notices.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AddnoticeComponent } from './components/addnotice/addnotice.component';
import { PersonGuard } from './guards/person.guard';
import { SendmessageComponent } from './components/sendmessage/sendmessage.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { InboxComponent } from './components/inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notices/view',
    component: NoticesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'notices/add',
    component: AddnoticeComponent,
    canActivate:[PersonGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'messages/newmessage',
    component: SendmessageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'messages/outbox',
    component: OutboxComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'messages/inbox',
    component: InboxComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
