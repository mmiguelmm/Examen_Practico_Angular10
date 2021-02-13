import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTopComponent } from './components/course-top/course-top.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { CourseListComponent } from './components/course-list/course-list.component';



@NgModule({
  declarations: [CourseTopComponent, InstructorsComponent, CourseListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CourseTopComponent,
    InstructorsComponent,
    CourseListComponent
    
  ]
})
export class SharedModule { }
