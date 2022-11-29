import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreatingPollComponent } from './creating-poll/creating-poll.component';
import { PollComponent } from './poll/poll.component';
import { PollHistoryComponent } from './poll-history/poll-history.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CreatingPollComponent,
    PollComponent,
    PollHistoryComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HomeModule,
    SidenavModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
