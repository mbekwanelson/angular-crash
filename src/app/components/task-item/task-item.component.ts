import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeletetask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeletetask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

}
