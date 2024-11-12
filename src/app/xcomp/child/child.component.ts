import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mentor } from '../../shared/mentor';
import { count } from 'console';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() selectedC: Mentor | undefined;
  @Output() likeEvent = new EventEmitter<number>();

  
  /* onLike(count: any){
    this.selectedC!.likeCount = count+1
    
  } */
  onLike(){
    console.log('Like clicked', this.selectedC);
    if(this.selectedC){
      this.selectedC.likeCount!++;
      this.likeEvent.emit(this.selectedC?.id)
    }
  }

}
