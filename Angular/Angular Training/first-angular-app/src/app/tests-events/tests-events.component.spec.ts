import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsEventsComponent } from './tests-events.component';

describe('TestsEventsComponent', () => {
  let component: TestsEventsComponent;
  let fixture: ComponentFixture<TestsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
