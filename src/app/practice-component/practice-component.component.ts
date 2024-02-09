import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-component',
  standalone: true,
  imports: [],
  templateUrl: './practice-component.component.html',
  styleUrl: './practice-component.component.css'
})
export class PracticeComponentComponent {
  counter : number = 0;
  name: string = 'bidur'
  increseNUmber(){
    this.counter+=1;
    alert("clicked me ")
  }
}
