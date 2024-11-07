import {ApplicationConfig} from "@angular/core";
import {provideRouter, withComponentInputBinding, withRouterConfig} from "@angular/router";
import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding(), withRouterConfig({
    paramsInheritanceStrategy: 'always'
  }))]//for using input we need to add withComponentInputBinding()// paramsInheritanceStrategy: 'always' for injecting parameters into child
}
