import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CategoryComponent } from "./category/category.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { BindingComponent } from "./binding/binding.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from "./directives/directives.component";
import { RoutingComponent } from "./routing/routing.component";
import { DetailsComponent } from './routing/details/details.component';
import { ParentComponent } from './xcomp/parent/parent.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { LeftComponent } from './intercomm/left/left.component';
import { RightComponent } from './intercomm/right/right.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'bindings', component: BindingComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'routes', component: RoutingComponent},
  {path:'mentor/:id', component: DetailsComponent},
  {path:'xcomp', component: ParentComponent},
  {path:'servicedemo', component: ServiceDemoComponent},
  {path:'left', component: LeftComponent},
  {path:'right', component: RightComponent},
  {path:'posts', component: PostComponent}
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CategoryComponent,
    InvoiceComponent, BindingComponent, CommonModule, FormsModule, DirectivesComponent, RoutingComponent,RouterModule,DetailsComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second';
}
