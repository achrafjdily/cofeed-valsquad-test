import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestActivityShellComponent } from './latest-activity-shell.component';

describe('LatestActivityShellComponent', () => {
  let component: LatestActivityShellComponent;
  let fixture: ComponentFixture<LatestActivityShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestActivityShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestActivityShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
