import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Mentor } from '../../shared/mentor';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  mentor: Mentor | undefined;
  mentorId: number | undefined;

  constructor(private route: ActivatedRoute){
    let index= Number(this.route.snapshot.paramMap.get('id'));
    this.mentorId= index;
  }

}
