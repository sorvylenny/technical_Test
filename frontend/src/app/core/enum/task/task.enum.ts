import { environment } from "src/environments/environment";

export const TASK_ROUTES = {
  createTask: `${environment.api}/task/createTask`,
  getTask: `${environment.api}/task/getTask`,
}
