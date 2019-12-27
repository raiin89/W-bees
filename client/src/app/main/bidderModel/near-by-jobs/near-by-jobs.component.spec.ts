import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByJobsComponent } from './near-by-jobs.component';

describe('NearByJobsComponent', () => {
  let component: NearByJobsComponent;
  let fixture: ComponentFixture<NearByJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearByJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
