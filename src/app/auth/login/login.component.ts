import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any): void {
    const { email, password } = form.value;
    this.authService.login(email, password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/home']);
        // Potresti memorizzare il token qui o fare una navigazione alla home page.
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please try again.';
        console.error(error);
      }
    });
  }
}
