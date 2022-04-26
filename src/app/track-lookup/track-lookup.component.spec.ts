import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing/';
import { TrackLookupComponent } from './track-lookup.component';
import { MatAutocompleteHarness } from '@angular/material/autocomplete/testing';
import { MatAutocomplete } from '@angular/material/autocomplete/';
describe('TrackLookupComponent', () => {
  let component: TrackLookupComponent;
  let fixture: ComponentFixture<TrackLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TrackLookupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
