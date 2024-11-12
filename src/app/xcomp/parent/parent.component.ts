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
  mentors: Mentor[] = [new Mentor(1,"Efe",65), new Mentor(2,"Sezai",85), new Mentor(3,"Ensar",25)]

  selectedP: Mentor | undefined;

  onSelect(mentor: Mentor){
    this.selectedP = mentor;
  }

  onLike(id: number){
    console.log(id)
  }
}
