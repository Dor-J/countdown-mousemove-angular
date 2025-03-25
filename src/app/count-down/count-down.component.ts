import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  standalone: false,
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.scss',
})
export class CountDownComponent implements OnInit, OnDestroy {
  onStartFromChange(event: any) {
    const inputValue = event?.target?.value;
    this.startFrom = !inputValue ? this.startFrom : inputValue;
  }
  startFrom: number | null = 10;
  remainingSeconds: number = this.startFrom ? this.startFrom : 10;

  intervalId: ReturnType<typeof setInterval> | null = null;

  async ngOnInit() {
    this.startInterval();
  }

  startInterval(): void {
    this.intervalId = setInterval(() => {
      this.remainingSeconds -= 1;
      if (this.remainingSeconds <= 0) this.stopInterval();
    }, 1000);
  }

  onResetClick() {
    this.remainingSeconds = this.startFrom ? this.startFrom : 10;
    this.startInterval();
  }

  onToggleTimer() {
    if (this.intervalId) {
      this.stopInterval();
    } else if (this.remainingSeconds <= 0) {
      this.onResetClick();
    } else {
      this.startInterval();
    }
  }

  stopInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = null;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      () => this.stopInterval();
    }
  }
}
