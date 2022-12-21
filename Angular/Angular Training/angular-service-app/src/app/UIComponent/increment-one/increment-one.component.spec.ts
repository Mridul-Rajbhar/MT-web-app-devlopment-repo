import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementOneComponent } from './increment-one.component';

describe('IncrementOneComponent', () => {
  let component: IncrementOneComponent;
  let fixture: ComponentFixture<IncrementOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
