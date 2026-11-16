import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './task/dummay-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskModel } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) id!: string | undefined;
  @Input({ required: true }) name: string | undefined;
  isAddingTask = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.id ?? '');
  }

  onCompleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseDialog(status: boolean) {
    if (status) this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskModel) {
    this.taskService.addTask(taskData, this.id ?? '');
    this.onCloseDialog(true);
  }
}
