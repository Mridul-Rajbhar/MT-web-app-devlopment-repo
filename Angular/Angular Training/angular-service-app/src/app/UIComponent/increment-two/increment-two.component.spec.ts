import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementTwoComponent } from './increment-two.component';

describe('IncrementTwoComponent', () => {
  let component: IncrementTwoComponent;
  let fixture: ComponentFixture<IncrementTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
