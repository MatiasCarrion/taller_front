import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarComponent } from './components/car/car.component';
import { CarService } from './services/car/car.service';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCER } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from './state/effects/car.effects';
import { PatenteComponent } from './components/car/patente/patente.component';
import { PatentePipe } from './pipes/patent/patente.pipe';
import { FilterObservableListPipe } from './pipes/patent/filter-observable-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    CarComponent,
    CarUpdateComponent,
    CarListComponent,
    PatenteComponent,
    PatentePipe,
    FilterObservableListPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CarEffects])
    ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
