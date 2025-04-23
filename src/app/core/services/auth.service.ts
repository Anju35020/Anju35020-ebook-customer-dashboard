import { Injectable } from "@angular/core";
import { delay, of, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    login(email: string, password: string): any{
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if(storedUser.email === email && storedUser.password === password){
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'+
                 'eyJ1c2VySWQiOjEsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSJ9.' +
                 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c;'
            console.log(token);
            localStorage.setItem('token', token);
            return of({token}).pipe(delay(1000));
        }else{
            return throwError(()=>{
                new Error('Invalid Credentials')
            }).pipe(delay(1000));
        }
    }

    signUp(data: any){
        
    }

    logout(){
        localStorage.removeItem('token');
    }

    isLoggedIn(){
        return !!localStorage.getItem('token');
    }
}