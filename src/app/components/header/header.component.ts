import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: String = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  //initialize
  constructor(private uiservice : UiService, private router : Router)
  {
      this.subscription = this.uiservice
        .onToggle()
        .subscribe((value) => this.showAddTask = value);

  }

  //run when the component loads
  ngOnInit(): void {

  }

  toggleAddTask()
  {
    this.uiservice.toggleAddTask();
  }

  hasRoute(route:string): boolean{
    return this.router.url === route;
  }

}
