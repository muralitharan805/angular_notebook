import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrComponent } from './show-err.component';

describe('ShowErrComponent', () => {
  let component: ShowErrComponent;
  let fixture: ComponentFixture<ShowErrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowErrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
