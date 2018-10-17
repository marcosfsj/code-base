import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

import { SignupService } from './signup.service';
import { Signup } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  genders: string[] = ['Male', 'Female'];
  form: FormGroup;
  forbiddenUserNames = ['Anna', 'Chris'];

  constructor(private signupService: SignupService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.minLength(3), this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails]),
      'gender': new FormControl(this.genders[0], Validators.required),
      'hobbies': new FormArray([])
    });
    this.form.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.form.statusChanges.subscribe(
      (value) => console.log(value)
    );
  }

  get userName() { return this.form.get('userName'); }
  get email() { return this.form.get('email'); }
  get gender() { return this.form.get('gender'); }
  get hobbies() { return this.form.get('hobbies'); }

  onSave() {
    const signup = new Signup(
      0,
      this.userName.value,
      this.email.value,
      this.gender.value,
      this.hobbies.value
    );
    this.signupService.add(signup).subscribe(() => { });
  }

  onAddHobby() {
    const hobby = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(hobby);
  }

  forbiddenNames(control: FormControl): {[key: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    // This kind of validator is usualy used for validations that has to go to the server
    // to validate something.
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
