import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruddeleteComponent } from './cruddelete.component';

describe('CruddeleteComponent', () => {
  let component: CruddeleteComponent;
  let fixture: ComponentFixture<CruddeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CruddeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruddeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
