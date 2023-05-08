import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
  loading$ = new BehaviorSubject<boolean>(false);
  private loadingCount = 0;

  constructor() { }

  startLoading(): void {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loading$.next(true);
    }
  }

  stopLoading(): void {
    this.loadingCount = Math.max(--this.loadingCount, 0); // 防止負數(基本上不該發生)
    if (this.loadingCount === 0) {
      this.loading$.next(false);
    }
  }
}
