import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptoListComponent } from './depto-list.component';

describe('DeptoListComponent', () => {
  let component: DeptoListComponent;
  let fixture: ComponentFixture<DeptoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
