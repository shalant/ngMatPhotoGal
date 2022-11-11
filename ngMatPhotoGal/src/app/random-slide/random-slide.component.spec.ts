import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSlideComponent } from './random-slide.component';

describe('RandomSlideComponent', () => {
  let component: RandomSlideComponent;
  let fixture: ComponentFixture<RandomSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
