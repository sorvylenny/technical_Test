import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Path } from 'src/app/core/enum/listTask/listTask.enum';
import { Status } from 'src/app/core/enum/status/status.enum';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  filter: string = 'todos';
  statusFilter = Status;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  async getTasks(filter?: string) {
    const tasks = await this.taskService.getTask(filter);
    this.tasks = tasks;
  }

  onStatusChange(task: Task, isChecked: boolean) {
    task.status = isChecked ? Status.COMPLETED : Status.PENDING;
  }


  setFilter(filter: string) {
    this.filter = filter;

    if (filter === 'todos') {
      this.getTasks();
    } else {
      this.getTasks(filter);
    }
  }

  goBack() {
    this.router.navigate([Path.CREATETASK]);
  }
}
