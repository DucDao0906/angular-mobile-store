import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() button = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let localCart = JSON.parse(localStorage.getItem('cart'));
    let count = document.getElementById('cart__count');
    if (localCart) {
      count.textContent = localCart.length;
    } else {
      count.textContent = '0';
    }
  }
  public onLogout = () => {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  };
}
