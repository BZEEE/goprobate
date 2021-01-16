import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoProbateMainInformationComponent } from './go-probate-main-information.component';

describe('GoProbateMainInformationComponent', () => {
  let component: GoProbateMainInformationComponent;
  let fixture: ComponentFixture<GoProbateMainInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoProbateMainInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoProbateMainInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
