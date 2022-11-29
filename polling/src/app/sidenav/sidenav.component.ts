import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../auth/AuthorizeService.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(
    private readonly _authService: AuthorizeService,
    private readonly _router: Router
  ) {}

  ngOnInit() {}

  onLogoutToggle(): void {
    this._authService.logOut();
  }

  isLogged() {
    return this._authService.isLogged();
  }
}
