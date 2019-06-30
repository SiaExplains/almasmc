import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagComponent } from './diag.component';

describe('DiagComponent', () => {
  let component: DiagComponent;
  let fixture: ComponentFixture<DiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
