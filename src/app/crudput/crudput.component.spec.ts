import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudputComponent } from './crudput.component';

describe('CrudputComponent', () => {
  let component: CrudputComponent;
  let fixture: ComponentFixture<CrudputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
