import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { takeLast } from 'rxjs';
import { ThisReceiver, TmplAstElement } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.taskService
    .getTasks()
    .subscribe((tasks)=> (this.tasks = tasks));

  }

  deleteTask(task: Task){

    this.taskService
    .deleteTask(task)
    .subscribe(()=>(this.tasks = this.tasks.filter(t => t.id !== task.id)));

  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(newtask: Task){
      this.taskService.addTask(newtask).subscribe((newtask)=>(this.tasks.push(newtask)));
  }

}
