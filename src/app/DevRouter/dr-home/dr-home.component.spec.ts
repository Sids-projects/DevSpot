import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrHomeComponent } from './dr-home.component';

describe('DrHomeComponent', () => {
  let component: DrHomeComponent;
  let fixture: ComponentFixture<DrHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
