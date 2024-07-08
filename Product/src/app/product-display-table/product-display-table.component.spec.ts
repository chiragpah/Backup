import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayTableComponent } from './product-display-table.component';

describe('ProductDisplayTableComponent', () => {
  let component: ProductDisplayTableComponent;
  let fixture: ComponentFixture<ProductDisplayTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDisplayTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDisplayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
