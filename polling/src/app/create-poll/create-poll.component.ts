import { Component, OnInit } from '@angular/core';
import { PollType } from '../poll-type';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss'],
})
export class CreatePollComponent implements OnInit {

  pollType!: PollType;

  constructor() {
  }

  ngOnInit() {}

  // numberOfQuestions: number =2;

  // numSequence(n: number): Array<number> {
  //   return Array(n);
  // }


  onChange(value: any){
    this.pollType = value;
    console.log(value)
 }
}
