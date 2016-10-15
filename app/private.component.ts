import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="tarto" >

                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>

            </div>
    	`,

    styles: [`
      .tarto {
        height: 100%;
        background-color: rgba(28,98,116,1);
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: 15px;
        padding-top: 200px;
      }


      `]


})

export class PrivateComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}
