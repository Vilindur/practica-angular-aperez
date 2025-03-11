import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpostComponent } from './crudpost.component';

describe('CrudpostComponent', () => {
  let component: CrudpostComponent;
  let fixture: ComponentFixture<CrudpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
