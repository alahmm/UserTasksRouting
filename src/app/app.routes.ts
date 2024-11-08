import {CanMatchFn, RedirectCommand, Router, Routes} from "@angular/router";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveTitle, resolveUserName, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {routes as userRoutes} from "./users/users.routes";
import {NotFoundComponent} from "./not-found/not-found.component";
import {inject} from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {//Guard function
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
}

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
    canMatch: [dummyCanMatch],//just point at this function,  do not use () bc angular will execute it for us
    data: {
      message: 'Hello!'//user task component will receive this static message input
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle//for the title above on the webpage
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
