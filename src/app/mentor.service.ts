import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  mentors: Mentor[] = [
    new Mentor(1,"Efe",65),
    new Mentor(2,"Sezai",85),
    new Mentor(3,"Ensar",25)
  ]

  selectedMentor: Mentor = this.mentors[0];

  constructor(){}

  likeMentor(mentor: Mentor){
    this.selectedMentor.likeCount!++;
  }

  likeMentor2(mentor: Mentor){
    let index = this.mentors.findIndex(mentor=>mentor.id === this.selectedMentor.id);
    this.mentors[index].likeCount!+=1;
  }
  
}
