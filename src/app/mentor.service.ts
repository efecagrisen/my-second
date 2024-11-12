import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor() { }

  mentors: Mentor[] = [
    new Mentor(1,"Efe",65),
    new Mentor(2,"Sezai",85),
    new Mentor(3,"Ensar",25)
  ]
  
}
