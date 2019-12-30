import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerApprovedJobsComponent } from './seeker-approved-jobs.component';

describe('SeekerApprovedJobsComponent', () => {
  let component: SeekerApprovedJobsComponent;
  let fixture: ComponentFixture<SeekerApprovedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerApprovedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerApprovedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
