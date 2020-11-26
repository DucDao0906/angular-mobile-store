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

  // login = () => {
  //   this.authenticationService.login(this.userName, this.password).subscribe(
  //     (data) => {
  //       if (data != null && data.username) {
  //         localStorage.setItem('username', data.username);
  //         localStorage.setItem('password', data.password);
  //         console.log('login Success');
  //         // this.router.navigateByUrl('/productList');
  //       } else {
  //         console.log('login fail');
  //       }
  //     },
  //     (err) => console.error(err)
  //   );
  // };
  login = async () => {
    const body = { username: this.username, password: this.password };
    try {
      const res = await api.post(`/users/login`, body);
      const { token } = res.data;
      setAuthToken(token);
    } catch (error) {
      console.log(error.message);
    }
  };

  ngOnInit(): void {}
}
