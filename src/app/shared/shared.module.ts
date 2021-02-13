import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTopComponent } from './components/course-top/course-top.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { InstructorsTopComponent } from './components/instructors-top/instructors-top.component';



@NgModule({
  declarations: [CourseTopComponent, InstructorsComponent, CourseListComponent, InstructorsTopComponent],
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
