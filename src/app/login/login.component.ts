import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

import { api } from '../utils/api';
import setAuthToken from '../utils/setAuthToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  login = () =>{
    this.authenticationService.login(this.username, this.password).subscribe(
      (data) => {
        if (data != null && data.name) {
          localStorage.setItem('username', this.username);
          console.log(data)
          // localStorage.setItem('password', data.password);
          console.log('login Success');
          this.router.navigateByUrl('/products');
        } else{
          console.log('login fail');
        }
      },
      (err) => console.error(err)
    );
  };

  ngOnInit(): void {}
}
