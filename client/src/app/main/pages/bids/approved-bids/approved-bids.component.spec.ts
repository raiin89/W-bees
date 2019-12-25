import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedBidsComponent } from './approved-bids.component';

describe('ApprovedBidsComponent', () => {
  let component: ApprovedBidsComponent;
  let fixture: ComponentFixture<ApprovedBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
