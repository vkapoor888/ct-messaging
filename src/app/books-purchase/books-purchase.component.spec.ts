import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPurchaseComponent } from './books-purchase.component';

describe('BooksPurchaseComponent', () => {
  let component: BooksPurchaseComponent;
  let fixture: ComponentFixture<BooksPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
