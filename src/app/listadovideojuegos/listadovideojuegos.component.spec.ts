import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadovideojuegosComponent } from './listadovideojuegos.component';

describe('ListadovideojuegosComponent', () => {
  let component: ListadovideojuegosComponent;
  let fixture: ComponentFixture<ListadovideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadovideojuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadovideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
