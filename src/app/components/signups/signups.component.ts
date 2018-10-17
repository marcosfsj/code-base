import { Subscription } from 'rxjs';
import { Signup } from './signup.model';
import { SignupService } from './signup.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.scss']
})
export class SignupsComponent implements OnInit, OnDestroy {

  signups: Signup[];
  signupsSubscription: Subscription;

  constructor(
    private signupService: SignupService,
    private router: Router ) { }

  ngOnInit() {
    this.signupsSubscription = this.signupService.listAll().subscribe(
      (data: Signup[]) => { this.signups = data; }
    );
  }

  ngOnDestroy() {
    this.signupsSubscription.unsubscribe();
  }

  onNew() {
    this.router.navigate(['/signups', 'new']);
  }

}
