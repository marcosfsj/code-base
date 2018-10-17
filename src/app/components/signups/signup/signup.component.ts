import { Signup } from './../signup.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Input() signup: Signup;

  constructor() { }

  ngOnInit() {
  }

}
