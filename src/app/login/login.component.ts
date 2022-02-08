import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  error = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.loginForm);
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.isLoading = true;
    this.authService.login(email, password).subscribe(
      (res) => {
        this.isLoading = false;
        this.authService.user.next(res);
        console.log(res);
        this.router.navigate(["/"]);
      },
      (error) => {
        console.log(error);
        this.error = error;
      },
    );
    this.loginForm.reset();
  }
}
