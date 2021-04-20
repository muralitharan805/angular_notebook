import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditerComponent } from './profile-editer.component';

describe('ProfileEditerComponent', () => {
  let component: ProfileEditerComponent;
  let fixture: ComponentFixture<ProfileEditerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
