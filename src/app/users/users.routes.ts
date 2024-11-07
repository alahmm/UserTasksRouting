import {resolveUserTasks, TasksComponent} from "../tasks/tasks.component";
import {NewTaskComponent} from "../tasks/new-task/new-task.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',//if not selecting a path after user, that should be the default path
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',// will be used together with resolve to detect the query change
    resolve: {
      userTasks: resolveUserTasks
    }
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent
  }
]
