import {resolveUserTasks, TasksComponent} from "../tasks/tasks.component";
import {canLeaveEditPage, NewTaskComponent} from "../tasks/new-task/new-task.component";
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
    runGuardsAndResolvers: 'always',// will be used together with resolve to detect the query change, set to always to run resolver again
    resolve: {
      userTasks: resolveUserTasks
    }
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage]
  }
]
