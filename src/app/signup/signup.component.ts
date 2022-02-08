import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;
  error = null;
  constructor(
    private authService: AuthService,
    comonentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }
  onSubmit() {
    let email = this.signupForm.value.email;
    let password = this.signupForm.value.password;
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.authService.signup(email, password).subscribe(
        (res) => {
          console.log(res);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.error = error;
          this.isLoading = false;
        },
      );
    }
    this.signupForm.reset();
  }
  onHandleError() {
    this.error = null;
  }
}
