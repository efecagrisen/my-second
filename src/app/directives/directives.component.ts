import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Mentor } from '../shared/mentor';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass,NgStyle,NgIf,NgFor],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  isDisabled: boolean = true;
  isAuthorized: boolean = true;
  mentors: string[]=['Sezai','Ensar','Ümran','Efe']
  
  myMentors: Mentor[] = [
    new Mentor(1,'Efe', 12),
    new Mentor(2,'Sezai'),
    new Mentor(3,'Matt',26),
    new Mentor(4,'George'),
  ]

  iMentors: IMentor[] = [
    {name:'Çağrı Efe',likeCount:12},
    {name:'Ümran',likeCount:22},
    {name:'Ensar',likeCount:32},
    {name:'Sezai',likeCount:52},
  ]

  onClick(){
    this.isDisabled = !this.isDisabled;
    this.isAuthorized = !this.isAuthorized;
  }

  

}

interface IMentor{
  name: string;
  likeCount: number;
}
