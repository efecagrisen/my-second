// app.routes.ts
import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { RoutingComponent } from './routing/routing.component';
import { DetailsComponent } from './routing/details/details.component';

export const routes: Routes = [
  {path: 'binding', component: BindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'routes', component: RoutingComponent},
  {path:'mentor/:id', component: DetailsComponent}
];