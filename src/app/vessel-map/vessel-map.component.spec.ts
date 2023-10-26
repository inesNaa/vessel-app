import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselMapComponent } from './vessel-map.component';

describe('VesselMapComponent', () => {
  let component: VesselMapComponent;
  let fixture: ComponentFixture<VesselMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VesselMapComponent]
    });
    fixture = TestBed.createComponent(VesselMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
