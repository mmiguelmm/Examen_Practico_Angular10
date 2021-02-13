import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-instructors-top',
  templateUrl: './instructors-top.component.html',
  styleUrls: ['./instructors-top.component.scss']
})
export class InstructorsTopComponent implements OnInit {

  @Input() instructor: [];
  constructor() { }

  ngOnInit(): void {
  }

}
