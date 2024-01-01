import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, Event, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from 'src/shared/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private number: number = 123345456;
  secondValue: number = 126;
  numbers: number[] = [];
  authenticated: boolean = false;
  displayLoadingIndicator: boolean = false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.authenticated = this.authService.isAuthenticated();
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd
        || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError) {
        this.displayLoadingIndicator = false;
      }
    });
  }


  get counter() {
    return this.number;
  }

  set counter(value: number) {
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  add() {
    this.numbers.push(1);
  }

  login() {
    this.authService.logIn();
    this.authenticated = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logOut();
    this.authenticated = this.authService.isAuthenticated();
  }
}
