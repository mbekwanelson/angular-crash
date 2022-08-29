import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: string;
  day!: string;
  reminder: boolean = false;
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uisvc : UiService) {

    this.subscription = this.uisvc
        .onToggle()
        .subscribe((value) => this.showAddTask = value);

  }

  ngOnInit(): void {

  }

  onSubmit(){

    if(!this.text){
      alert("Please add Task");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.reminder = false;
    this.day = "";
    this.text = "";

  }



}
