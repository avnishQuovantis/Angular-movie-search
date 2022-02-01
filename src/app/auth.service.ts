import {Subject} from "rxjs"
export class AuthService {
  loggedIn = false;
  users:{}={}
  signupEvent=new Subject<{}>()
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  signup(user){
    // console.log(user);
    let key=user["email"]
    this.users[key]=user
    console.log(this.users);
    
  }
}
