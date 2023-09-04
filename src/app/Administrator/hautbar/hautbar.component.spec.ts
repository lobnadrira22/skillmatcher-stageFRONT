import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HautbarComponent } from './hautbar.component';

describe('HautbarComponent', () => {
  let component: HautbarComponent;
  let fixture: ComponentFixture<HautbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HautbarComponent]
    });
    fixture = TestBed.createComponent(HautbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
