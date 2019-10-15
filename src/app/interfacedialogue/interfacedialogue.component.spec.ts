import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacedialogueComponent } from './interfacedialogue.component';

describe('InterfacedialogueComponent', () => {
  let component: InterfacedialogueComponent;
  let fixture: ComponentFixture<InterfacedialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacedialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacedialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
