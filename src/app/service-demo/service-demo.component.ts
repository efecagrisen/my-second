import { Component, OnInit } from '@angular/core';
import { Mentor } from '../shared/mentor';
import { NgFor } from '@angular/common';
import { MentorService } from '../mentor.service';
import { error } from 'console';

@Component({
  selector: 'app-service-demo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css'
})
export class ServiceDemoComponent implements OnInit{
  
  mentors: Mentor[] = [];

  constructor(private service: MentorService){}

  ngOnInit(): void {
    this.mentors = this.service.mentors;
    // this.service.fetchMentors$().subscribe({
    //     next: (data) => {
    //       this.mentors = data;
    //       console.log('Mentors:', this.mentors)},
    //     error: (error) => console.log(error),
    //     complete: () => console.log("completed")
    // }

    );
    console.log("mentors fetched")
  }
}
