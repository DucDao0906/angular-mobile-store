import { Component, OnInit } from '@angular/core';
import setAuthToken from './utils/setAuthToken';
import { api } from './utils/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MobileStore';
  ngOnInit(): void {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    window.addEventListener('storage', () => {
      // log user out from all tabs if they logged out in one tab or the token expires, or user try to modify token
      if (
        api.defaults.headers.common['x-auth-token'] !== localStorage.token ||
        !localStorage.token
      ) {
        api.defaults.headers.common['x-auth-token'] = null;
      }
    });
  }
}
