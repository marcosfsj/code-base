import { Component, OnInit } from '@angular/core';
import { FormBuilder,
         FormGroup,
         FormControl,
         Validators,
         ValidatorFn,
         AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      this.forbiddenNameValidator(/bob/i)
    ]),
    lastName: new FormControl(''),
    address: new FormGroup({
      lineOne: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(''),
    })
  });

  reactiveFormUsingFormBuilder = this.formBuilder.group({
    firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        this.forbiddenNameValidator(/bob/i)
      ]
    ],
    lastName: [''],
    address: this.formBuilder.group({
      lineOne: [''],
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get firstName() { return this.reactiveForm.get('firstName'); }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  onSubmitUsingFormBuilder() {
    console.log(this.reactiveFormUsingFormBuilder.value);
  }

  updateReactiveForm() {
    this.reactiveForm.patchValue({
      firstName: 'Nancy',
      address: {
        lineOne: '123 drew street'
      }
    });
  }

  updateReactiveFormUsingFormBuilder() {
    this.reactiveFormUsingFormBuilder.patchValue({
      firstName: 'Nancy',
      address: {
        lineOne: '123 drew street'
      }
    });
  }

  forbiddenNameValidator(name: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = name.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

}
