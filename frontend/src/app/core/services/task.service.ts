import { Injectable } from '@angular/core';
import { Task, TaskPayload } from 'src/app/interfaces/task';
import { TASK_ROUTES } from '../enum/task/task.enum';
import { RequestMethod } from '../enum/httpsRequest/httpsRequest.enum';
import { GlobalHttpService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends GlobalHttpService {

  async createTask(payload: TaskPayload): Promise<Task> {
    return await this.makeRequest<Task, TaskPayload>(TASK_ROUTES.createTask, payload, RequestMethod.POST);
  }

  async getTask(filter?: string): Promise<Task[]> {
    return await this.makeHttpRequest<Task[]>(
      filter ? `${TASK_ROUTES.getTask}?status=${filter}` : TASK_ROUTES.getTask,
      {},
      RequestMethod.GET
    );
  }

}

