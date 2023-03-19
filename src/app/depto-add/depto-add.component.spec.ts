import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptoAddComponent } from './depto-add.component';

describe('DeptoAddComponent', () => {
  let component: DeptoAddComponent;
  let fixture: ComponentFixture<DeptoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
