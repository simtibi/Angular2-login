import {Component} from 'angular2/core';
import {AuthenticationService, User} from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: "app/templates/login/login.html",
    styles : [`
        span {
          font-size: 20px;
          display: block;
          margin-left: 15px;
        }
        input {
          color: white !important;
          font-size: 20px !important;
        }
        .tarto {
          height: 100%;
          background-color: rgba(28,98,116,1);
          padding-top: 50px;
        }
        .logo {
          width: 300px;
          height: 150px;
          background-image: url('app/pics/logo-with-text-white.png');
          background-repeat: no-repeat;
          background-size: contain;
          margin: 0px auto;
          margin-bottom: 50px;

        }
        .panel-body {
          background-color: rgba(28,98,116,1);
        }

      `]
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = "You didn't say the magic word!";
        }
    }
}
