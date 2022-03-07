import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestActivityComponent } from './latest-activity.component';

describe('LatestActivityComponent', () => {
  let component: LatestActivityComponent;
  let fixture: ComponentFixture<LatestActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
