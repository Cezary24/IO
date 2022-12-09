import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PollComponent } from './poll/poll.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollHistoryComponent } from './poll-history/poll-history.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { PollViewComponent } from './poll-view/poll-view.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'poll', component: PollComponent },
  { path: 'create-poll', component: CreatePollComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'poll-history', component: PollHistoryComponent },
  { path: 'poll-view', component: PollViewComponent},
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
