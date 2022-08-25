import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: String = 'Task Tracker';
  //initialize
  constructor() { }

  //run when the component loads
  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('toggle add task')

  }

}
