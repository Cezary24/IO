import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialDesignModule} from "../../mat-design/material-design.module";
import {CreatePollComponent} from "./create-poll.component";

@NgModule({
  imports: [CommonModule, MaterialDesignModule],
  declarations: [CreatePollComponent],
  exports: [CreatePollComponent],
})

export class CreatePollModule {}
