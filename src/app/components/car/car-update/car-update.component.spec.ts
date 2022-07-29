import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarUpdateComponent } from './car-update.component';
import { RouterTestingModule } from '@angular/router/testing'
import { Store } from '@ngrx/store';

describe('CarUpdateComponent', () => {
  let component: CarUpdateComponent;
  let fixture: ComponentFixture<CarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarUpdateComponent ],
      imports: [ RouterTestingModule, Store ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
