import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  loginForm! : FormGroup
  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      ),]],
      password: ['', Validators.required]
    });
  
  }
  onSubmit() {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next:((res: any)=>{
          alert(res);
          this.router.navigate(['/dashboard']);
        }),
        error:((err: any)=>{
          alert(err);
        })
      })
    }
  }

  getErrorMessage(controlName: string): any{
    const control = this.loginForm.get(controlName);
    if(control?.hasError('required')){
      return 'This field is required';
    }
    if(controlName == 'email'){
      if(control?.hasError('email') || control?.hasError('pattern')){
        return 'Please enter the valid email';
      }
    }
  }
}
