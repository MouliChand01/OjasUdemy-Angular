import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDashBoardComponent } from './employe-dash-board.component';

describe('EmployeDashBoardComponent', () => {
  let component: EmployeDashBoardComponent;
  let fixture: ComponentFixture<EmployeDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
