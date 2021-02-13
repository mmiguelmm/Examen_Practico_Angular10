import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';
import { InstructorsMock } from '../../mocks/instructors.mocks';

@Injectable({
  providedIn: 'root'
})
export class InstructorMockService {

  constructor() { }

  getInstructors(): Observable<Instructor[]> {
    return new Observable(observer => {
      observer.next(InstructorsMock);
    });
  }

}
