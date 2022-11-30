import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForLoopComponent } from './test-for-loop.component';

describe('TestForLoopComponent', () => {
  let component: TestForLoopComponent;
  let fixture: ComponentFixture<TestForLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestForLoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestForLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
