import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsOnJobComponent } from './bids-on-job.component';

describe('BidsOnJobComponent', () => {
  let component: BidsOnJobComponent;
  let fixture: ComponentFixture<BidsOnJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsOnJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsOnJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
