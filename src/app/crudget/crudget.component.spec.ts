import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudgetComponent } from './crudget.component';

describe('CrudgetComponent', () => {
  let component: CrudgetComponent;
  let fixture: ComponentFixture<CrudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
