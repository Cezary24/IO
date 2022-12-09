import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollComponent } from './poll/poll.component';
import { PollHistoryComponent } from './poll-history/poll-history.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavMaterialsModule } from './side-nav/material';
import { HomeComponent } from './home/home.component';
import { SidenavModule } from './side-nav/side-nav.module';
import { MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { PollViewComponent } from './poll-view/poll-view.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MultipleChoiceQuestionComponent } from './add-question/multiple-choice-question/multiple-choice-question.component';
import { SingleChoiceQuestionComponent } from './add-question/single-choice-question/single-choice-question.component';
import { OpenQuestionComponent } from './add-question/open-question/open-question.component';
import { ScaleQuestionComponent } from './add-question/scale-question/scale-question.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CreatePollComponent,
    PollComponent,
    PollHistoryComponent,
    NotFoundPageComponent,
    NavBarComponent,
    HomeComponent,
    PollViewComponent,
    AddQuestionComponent,
    MultipleChoiceQuestionComponent,
    SingleChoiceQuestionComponent,
    OpenQuestionComponent,
    ScaleQuestionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AuthModule,
        MatProgressBarModule,
        MatToolbarModule,
        SideNavMaterialsModule,
        AppRoutingModule,
        SidenavModule,
        MatCardModule,
        MatRadioModule,
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
