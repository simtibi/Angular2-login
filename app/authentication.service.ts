import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('marcell.kiss@budacode.com','budacode'),
  new User('attila.olah@budacode.com','budacode'),
  new User('tibor.simon@budacode.com','budacode')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['Home']);
      return true;
    }
    return false;

  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  }
}
