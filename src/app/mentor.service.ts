import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';
import { HttpClient } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  // mentors: Mentor[] = [
  //   new Mentor(1,"Efe",65),
  //   new Mentor(2,"Sezai",85),
  //   new Mentor(3,"Ensar",25)
  // ]

  mentors: Mentor[] = [];

  baseUrl: string = 'http://localhost:8080/api/v1/user'

  selectedMentor: Mentor = this.mentors[0];

  constructor(private http: HttpClient){}

// getting mentors from backend (I used my own backend project so method names are mentor related but I retrieve users instead)

fetchMentors$():Observable<Mentor[]>{
  return this.http.get<ResponseType>(this.baseUrl)
            .pipe(
              map(response => response.data)
            );
}

//-----------------------------------------------
  likeMentor(mentor: Mentor){
    this.selectedMentor.likeCount!++;
  }

  likeMentor2(mentor: Mentor){
    let index = this.mentors.findIndex(mentor=>mentor.id === this.selectedMentor.id);
    this.mentors[index].likeCount!+=1;
  }
  
}


interface ResponseType{
  success: boolean,
  message: string,
  code: number,
  data: Mentor[]
}
