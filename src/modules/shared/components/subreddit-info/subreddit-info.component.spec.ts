import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditInfoComponent } from './subreddit-info.component';

describe('SubredditInfoComponent', () => {
  let component: SubredditInfoComponent;
  let fixture: ComponentFixture<SubredditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubredditInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
