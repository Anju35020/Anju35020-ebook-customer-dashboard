import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  loginForm! : FormGroup
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // Simulate login and JWT
      const fakeToken = 'hjdf7gbgyhgyyhhBHBUYF&*YbgGG*Y*YBGHG';
      localStorage.setItem('token', fakeToken);
      this.router.navigate(['/dashboard']);
    }
  }
}
