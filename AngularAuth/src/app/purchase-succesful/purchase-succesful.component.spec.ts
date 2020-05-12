import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSuccesfulComponent } from './purchase-succesful.component';

describe('PurchaseSuccesfulComponent', () => {
  let component: PurchaseSuccesfulComponent;
  let fixture: ComponentFixture<PurchaseSuccesfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSuccesfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
