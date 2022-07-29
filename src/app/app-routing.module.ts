import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:"home", component: HomeComponent, pathMatch: "full"},
  { path: 'autos', component: CarComponent,
    children: [
      { path: '', component: CarListComponent },
      { path: 'modificar/:id', component: CarUpdateComponent},
      { path: 'nuevo', component: CarUpdateComponent}
    ]},
  { path:'**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
