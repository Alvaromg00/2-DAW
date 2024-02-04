import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrellasRatingComponent } from './estrellas-rating.component';

describe('EstrellasRatingComponent', () => {
  let component: EstrellasRatingComponent;
  let fixture: ComponentFixture<EstrellasRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrellasRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstrellasRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
