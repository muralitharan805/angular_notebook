import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  login = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.login.value);
    if (
      this.login.value.username === 'admin' &&
      this.login.value.password === '123'
    ) {
      console.log('correct password');
      localStorage.setItem('user_token', '122343');
      this.router.navigate(['/main-site']);
    } else {
      alert('wrong password');
      this.login.reset();
    }
  }
}
