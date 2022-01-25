import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListCompComponent } from './shopping-list-comp.component';

describe('ShoppingListCompComponent', () => {
  let component: ShoppingListCompComponent;
  let fixture: ComponentFixture<ShoppingListCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
