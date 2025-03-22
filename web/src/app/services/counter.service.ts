import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = signal<number>(0);

  increment(): void {
    this.counter.update((count: number): number => count + 1);
  }

  constructor() { }
}
