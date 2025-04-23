import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.initForm();
  }

  initForm(){
    this.signupForm = this.fb.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(
         /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      )]], 
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.signupForm.invalid){
      this.signupForm.markAllAsTouched();
      return;
    }
    if (this.signupForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.signupForm.value));
      alert('Account created!');
      this.router.navigate(['/login']);
    }
  }

  getErrorMessage(controlName: string): any{
    const control = this.signupForm.get(controlName);
    if(control?.hasError('required')){
      return 'This field is required';
    }
    if(control?.hasError('email') || control?.hasError('pattern')){
      return 'Please enter valid email';
    }
  }
}
