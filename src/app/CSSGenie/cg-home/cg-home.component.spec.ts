import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgHomeComponent } from './cg-home.component';

describe('CgHomeComponent', () => {
  let component: CgHomeComponent;
  let fixture: ComponentFixture<CgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
