import { Component } from '@angular/core';
import { Mentor } from '../shared/mentor';
import { NgFor } from '@angular/common';
import { DetailsComponent } from "./details/details.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [NgFor, DetailsComponent, RouterModule],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {

  mentors: Mentor[] = [
    new Mentor(1,"MentorEfe",65),
    new Mentor(2,"MentorSezai",85),
    new Mentor(3,"MentorEnsar",25)
  ]

}
