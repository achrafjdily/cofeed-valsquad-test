import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedShellComponent } from './feed-shell.component';

describe('FeedShellComponent', () => {
  let component: FeedShellComponent;
  let fixture: ComponentFixture<FeedShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
