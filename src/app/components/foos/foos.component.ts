import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooService } from '../../services';
import { Foo } from '../../model';

@Component({
  selector: 'app-foos',
  templateUrl: './foos.component.html',
  styleUrls: ['./foos.component.scss']
})
export class FoosComponent implements OnInit, OnDestroy {

  foos: Foo[];
  fooListSubscription: Subscription;
  fooDeleteSubscription: Subscription;

  constructor(private fooService: FooService) { }

  ngOnInit() {
    this.getFoos();
  }

  getFoos(): void {
    this.fooListSubscription = this.fooService.listAll()
        .subscribe(foos => this.foos = foos);
  }

  onDelete(id: number): void {
    this.fooDeleteSubscription = this.fooService.delete(id).subscribe(
      () => this.foos = this.foos.filter(f => f.id !== id)
    );
  }

  ngOnDestroy() {
    this.fooListSubscription.unsubscribe();
    if (this.fooDeleteSubscription) { this.fooDeleteSubscription.unsubscribe(); }
  }

}
