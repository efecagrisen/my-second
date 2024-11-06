import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

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

  onClick(){
    this.isDisabled = !this.isDisabled;
    this.isAuthorized = !this.isAuthorized;
  }

}
