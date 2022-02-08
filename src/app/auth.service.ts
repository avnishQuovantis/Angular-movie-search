import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model.";
export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  loggedIn = false;
  users: {} = {};
  user = new BehaviorSubject<any>(null);
  signupEvent = new Subject<{}>();
  private tokenExpirationTime: any;
  constructor(private http: HttpClient, private router: Router) {}
  isAuthenticated() {}

  login(email, password) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClDh807SQYXg1th4rkCXgZhRwTzrdFkWI",
        { email: email, password: password, returnSecureToken: true },
      )
      .pipe(
        catchError((error) => {
          return throwError("error");
        }),
        tap((res) => {
          this.handleAuth(res.email, res.localId, res.idToken, +res.expiresIn);
        }),
      );
  }
  handleAuth(email: string, id: string, token: string, expiration: number) {
    //add token expiration which is in millisecond to current time
    const expirationDate = new Date(new Date().getTime() + expiration * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);

    localStorage.setItem("userData", JSON.stringify(user));
  }
  logout() {
    this.user.next(null);
    this.router.navigate(["/"]);
    localStorage.removeItem("userData");
    if (this.tokenExpirationTime) {
      clearTimeout(this.tokenExpirationTime);
    }
    this.tokenExpirationTime = null;
  }
  autoLogin() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }
    const user = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate),
    );
    //if user token is valid
    if (user.token) {
      this.user.next(user);
      const expirationDate =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      console.log("expiration Date=> ", expirationDate);
      this.autoLogout(expirationDate);
    }
  }
  autoLogout(expirationTime: number) {
    this.tokenExpirationTime = setTimeout(() => {
      this.logout();
    }, expirationTime);
  }
  signup(email, password) {
    return this.http
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClDh807SQYXg1th4rkCXgZhRwTzrdFkWI",
        { email: email, password: password, isreturnSecureToken: true },
      )
      .pipe(
        catchError((errorResp) => {
          console.log(errorResp);
          return throwError(errorResp.error.error.message);
        }),
      );
  }
}
