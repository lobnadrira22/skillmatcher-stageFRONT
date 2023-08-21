import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementCandidatComponent } from './traitement-candidat.component';

describe('TraitementCandidatComponent', () => {
  let component: TraitementCandidatComponent;
  let fixture: ComponentFixture<TraitementCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraitementCandidatComponent]
    });
    fixture = TestBed.createComponent(TraitementCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
