import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log('Posts received:', this.posts);
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }

//creating observables
  numbers: Observable<number> = of(1,2,3,4,5,6,7,8,9);

  words: Observable<string> = new Observable<string>(
    (observer) => {
      observer.next("Hello");
      observer.next("World");
      setTimeout(()=>{
        observer.next("Final")
      },5000) //5 sec later Final will print on the screen
    }
  );


}