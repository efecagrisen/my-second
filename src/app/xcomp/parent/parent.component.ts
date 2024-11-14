import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Mentor } from '../../shared/mentor';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,NgFor,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  mentors: Mentor[] = [new Mentor(1,'Efe', 'Sen', 'abc@abc.com', 12),
    new Mentor(2,'Sezai','Sen', 'abc@abc.com',),
    new Mentor(3,'Matt','Sen', 'abc@abc.com',26),
    new Mentor(4,'George','Sen', 'abc@abc.com',),]

  selectedP: Mentor | undefined;

  onSelect(mentor: Mentor){
    this.selectedP = mentor;
  }

  onLike(id: number){
    console.log(id)
  }
}
