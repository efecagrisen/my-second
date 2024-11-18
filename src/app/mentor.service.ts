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
  //   new Mentor(1,'Efe', 'Sen', 'abc@abc.com', 12),
  //   new Mentor(2,'Sezai','Sen', 'abc@abc.com',),
  //   new Mentor(3,'Matt','Sen', 'abc@abc.com',26),
  //   new Mentor(4,'George','Sen', 'abc@abc.com',),
  // ]

   mentors: Mentor[] = [];
  // mentorsFromApi: Mentor[] = [];

  baseUrl: string = 'http://localhost:8080/api/v1/user'

  selectedMentor: Mentor = this.mentors[0];

  constructor(private http: HttpClient){}

// getting mentors from backend (I used my own backend project so method names are mentor related but I retrieve users instead)

fetchMentors$(){
  this.http.get<ResponseType>(this.baseUrl)
  .pipe(
    map(response => response.data)
  )
  .subscribe({
    next: (data) => this.mentors = data,
    error: (error) => console.log(error),
    complete: () => console.log("completed")
  });
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
