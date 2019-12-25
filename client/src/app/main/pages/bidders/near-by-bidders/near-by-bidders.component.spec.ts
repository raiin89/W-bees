import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByBiddersComponent } from './near-by-bidders.component';

describe('NearByBiddersComponent', () => {
  let component: NearByBiddersComponent;
  let fixture: ComponentFixture<NearByBiddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearByBiddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
