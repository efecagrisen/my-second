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

const routes: Routes = [
  {path:'bindings', component: BindingComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'routes', component: RoutingComponent},
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CategoryComponent,
    InvoiceComponent, BindingComponent, CommonModule, FormsModule, DirectivesComponent, RoutingComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second';
}
