import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  @Input() instructors: [];
  constructor() { }

  ngOnInit(): void {
  }

}
