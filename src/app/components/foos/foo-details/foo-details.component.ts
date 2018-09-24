import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Foo } from '../../../model';
import { FormGroup } from '@angular/forms';
import { FooService } from 'src/app/services';

@Component({
  selector: 'app-foo-details',
  templateUrl: './foo-details.component.html',
  styleUrls: ['./foo-details.component.scss']
})
export class FooDetailsComponent implements OnInit {

  constructor(
    private fooService: FooService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { }

  foo: Foo;
  id: number;

  fooForm = this.fb.group({
    id: [''],
    fpa: ['', [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    fpb: [''],
    fpc: [''],
    fpd: ['']
  });

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.findById(this.id);
    }
  }

  get fid() { return this.fooForm.get('fid'); }
  get fpa() { return this.fooForm.get('fpa'); }
  get fpb() { return this.fooForm.get('fpb'); }
  get fpc() { return this.fooForm.get('fpc'); }
  get fpd() { return this.fooForm.get('fpd'); }

  add(): void {
    this.fooService.add(
      new Foo(
        this.nextId(),
        this.fooForm.get('fpa').value,
        this.fooForm.get('fpb').value,
        this.fooForm.get('fpc').value,
        this.fooForm.get('fpd').value
      )
    ).subscribe(() => this.goBack());
  }

  update(): void {
    this.fooService.update(
      new Foo(
        this.fooForm.get('id').value,
        this.fooForm.get('fpa').value,
        this.fooForm.get('fpb').value,
        this.fooForm.get('fpc').value,
        this.fooForm.get('fpd').value
      )
    ).subscribe(() => this.goBack());
  }

  findById(id: number): void {
    this.fooService.findById(id).subscribe(
      foo => {
        this.fooForm.patchValue({
          id: foo.id,
          fpa: foo.fpa,
          fpb: foo.fpb,
          fpc: foo.fpc,
          fpd: foo.fpd
        });
        this.foo = foo
      }
    );
  }

  nextId() {
    return Math.floor((Math.random()*100)+1);
  }

  goBack(): void {
    this.location.back();
  }

}
