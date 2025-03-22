import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  constructor(private counterService: CounterService) {}

  counter = this.counterService.counter;

  increment(): void {
    this.counterService.increment();
  }
}
