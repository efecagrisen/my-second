import { Component, OnInit } from '@angular/core';
import { Mentor } from '../../shared/mentor';
import { MentorService } from '../../mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent implements OnInit{
  

  selectedMentor: Mentor | undefined;

  constructor(private service: MentorService, private router: Router){}

  ngOnInit(): void {
    this.selectedMentor = this.service.selectedMentor;
  }

  onLikeMentor(mentor: Mentor){
    this.service.likeMentor(mentor);
    this.router.navigate(['left']);
  }

}
