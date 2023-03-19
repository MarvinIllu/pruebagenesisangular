import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptoDetailsComponent } from './depto-details.component';

describe('DeptoDetailsComponent', () => {
  let component: DeptoDetailsComponent;
  let fixture: ComponentFixture<DeptoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
