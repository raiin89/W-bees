import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerPendingJobsComponent } from './seeker-pending-jobs.component';

describe('SeekerPendingJobsComponent', () => {
  let component: SeekerPendingJobsComponent;
  let fixture: ComponentFixture<SeekerPendingJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerPendingJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerPendingJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
