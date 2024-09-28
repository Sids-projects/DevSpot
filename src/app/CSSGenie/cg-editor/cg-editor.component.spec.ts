import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgEditorComponent } from './cg-editor.component';

describe('CgEditorComponent', () => {
  let component: CgEditorComponent;
  let fixture: ComponentFixture<CgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
