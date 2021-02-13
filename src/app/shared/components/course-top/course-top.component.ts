import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-course-top',
  templateUrl: './course-top.component.html',
  styleUrls: ['./course-top.component.scss']
})
export class CourseTopComponent implements OnInit {

  @Input() course: [];
  constructor() { }

  ngOnInit(): void {
  }

}
