import {Component, computed, inject, input} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot} from "@angular/router";
import {User} from "../user/user.model";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class UserTasksComponent {
  // userId = input.required<string>();//that will be gotten from the path
  // private userService = inject(UsersService);
  // userName = computed(() =>
  //   this.userService.users.find((user) =>
  //     user.id === this.userId())?.name);

  userName = input.required<string>();
  message = input.required<string>();
}
export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const userService = inject(UsersService);
  return userService.users.find((user) =>
    user.id === activatedRoute.paramMap.get('userId'))?.name || '';
}
export const resolveTitle: ResolveFn<string> = (activatedRoute, routerState) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks';
}
