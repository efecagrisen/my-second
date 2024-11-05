import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  title: string = 'This is coming from TS file'
  age: number = 12;
  isDisabled: boolean = false;

  onClick():void{
    console.log("Clicked")
  }

  onClickEvent(event: Event):void{
    console.log(event)
    this.title = 'Title changed with button click';
    this.isDisabled = true;
  }

  onHover():void{
    console.log("Mouse hover on click button")
    //alert('Attention! You may loose data')
  }

  //----------------------------

  sentence: string = "Type your name"

  onSubmit(value: string){
    console.log(value);
    this.sentence = value;
  }

  //----------------------------

  anyString: string = '';

}
