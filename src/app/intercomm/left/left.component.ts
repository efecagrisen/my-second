import { Component, OnInit } from '@angular/core';
import { Mentor } from '../../shared/mentor';
import { NgFor } from '@angular/common';
import { MentorService } from '../../mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [NgFor],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent implements OnInit{

  mentors: Mentor[] = [];
mentor: any;

  constructor(private service: MentorService, private router: Router){
    
  }

  ngOnInit(): void {
    this.mentors = this.service.mentors;
  }

  onSelectMentor(mentor: Mentor){
   console.log(mentor);
   this.router.navigate(['right']);

  }


}
