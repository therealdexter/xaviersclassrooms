import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {FlashMessagesModule} from 'angular2-flash-messages'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NoticesComponent } from './components/notices/notices.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './guards/auth.guard';
import { NoticeService } from './services/notice.service';
import { AddnoticeComponent } from './components/addnotice/addnotice.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PersonGuard } from './guards/person.guard';
import { MessageService } from './services/message.service';
import { SendmessageComponent } from './components/sendmessage/sendmessage.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { MessagenavComponent } from './components/messagenav/messagenav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NoticesComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    AddnoticeComponent,
    TabsComponent,
    SendmessageComponent,
    InboxComponent,
    OutboxComponent,
    MessagenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule
  ],
  providers: [ValidateService,
  AuthService,
  MessageService,
  NoticeService,
  FlashMessagesService,
  AuthGuard,
  PersonGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
