import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderJobCardComponent } from './provider-job-card.component';

describe('ProviderJobCardComponent', () => {
  let component: ProviderJobCardComponent;
  let fixture: ComponentFixture<ProviderJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
