import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '../../shared/shared.interface';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [CardComponent, DatePipe, NgStyle],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})

export class UserTaskComponent {

  @Input() task!: TaskType;
  @Output() selectedTask = new EventEmitter<string>();

  public deleteTask() {
  this.selectedTask.emit(this.task.id);
}

}
