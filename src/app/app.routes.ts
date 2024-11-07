// app.routes.ts
import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { RoutingComponent } from './routing/routing.component';

export const routes: Routes = [
  {path: 'binding', component: BindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'routes', component: RoutingComponent}
];