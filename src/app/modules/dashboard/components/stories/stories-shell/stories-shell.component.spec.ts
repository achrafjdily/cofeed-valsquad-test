import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesShellComponent } from './stories-shell.component';

describe('StoriesShellComponent', () => {
  let component: StoriesShellComponent;
  let fixture: ComponentFixture<StoriesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
