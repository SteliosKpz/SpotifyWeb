import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLookupComponent } from './track-lookup.component';

describe('TrackLookupComponent', () => {
  let component: TrackLookupComponent;
  let fixture: ComponentFixture<TrackLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
