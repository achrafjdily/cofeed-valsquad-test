import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsShellComponent } from './suggestions-shell.component';

describe('SuggestionsShellComponent', () => {
  let component: SuggestionsShellComponent;
  let fixture: ComponentFixture<SuggestionsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
