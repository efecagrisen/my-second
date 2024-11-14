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
    new Mentor(1,'Efe', 'Sen', 'abc@abc.com', 12),
    new Mentor(2,'Sezai','Sen', 'abc@abc.com',),
    new Mentor(3,'Matt','Sen', 'abc@abc.com',26),
    new Mentor(4,'George','Sen', 'abc@abc.com',),
  ]

}
