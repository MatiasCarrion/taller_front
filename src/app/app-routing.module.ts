import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:"home", component: HomeComponent, pathMatch: "full"},
  { path: 'autos', component: CarComponent},
  { path:'**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
