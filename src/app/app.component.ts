import { Component, OnInit} from '@angular/core';
import { LoadingService } from './shared/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'megan-portfolio';
  loading: boolean = false;
  onActivate($event: Event): void {
    const componentName = $event.constructor.name;
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }

  ngOnInit(){}

  constructor(private loadingSvc: LoadingService){
    // Loading 畫面處理
    this.loadingSvc.loading$.subscribe(b => {
      this.loading = b;
    });
  }
}
