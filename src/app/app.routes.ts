import {Routes} from "@angular/router";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveTitle, resolveUserName, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {routes as userRoutes} from "./users/users.routes";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No Task'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello!'//user task component will receive this static message input
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
