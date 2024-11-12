// app.routes.ts
import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { RoutingComponent } from './routing/routing.component';
import { DetailsComponent } from './routing/details/details.component';
import { ParentComponent } from './xcomp/parent/parent.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

export const routes: Routes = [
  {path: 'binding', component: BindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'routes', component: RoutingComponent},
  {path:'mentor/:id', component: DetailsComponent},
  {path:'xcomp', component: ParentComponent},
  {path:'servicedemo', component: ServiceDemoComponent}

];