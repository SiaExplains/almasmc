import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorToDoorComponent } from './door-to-door.component';

describe('DoorToDoorComponent', () => {
  let component: DoorToDoorComponent;
  let fixture: ComponentFixture<DoorToDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorToDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorToDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
