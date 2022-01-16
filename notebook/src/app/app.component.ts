import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = new FormControl('');

  title = 'notebook';
  isAlternateMode = false;
  constructor(
    public overlayContainer: OverlayContainer,
    private fb: FormBuilder
  ) {}

  check() {
    this.overlayContainer
      .getContainerElement()
      .classList.add('unicorn-dark-theme');
    this.isAlternateMode = !this.isAlternateMode;
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  profileForm_nestedform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  updateProfile() {
    this.profileForm_nestedform.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  profileForm_formbuilder = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  profileForm_formArray = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.profileForm_formArray.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
