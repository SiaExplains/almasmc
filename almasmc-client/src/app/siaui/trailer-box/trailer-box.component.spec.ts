import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerBoxComponent } from './trailer-box.component';

describe('TrailerBoxComponent', () => {
  let component: TrailerBoxComponent;
  let fixture: ComponentFixture<TrailerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
