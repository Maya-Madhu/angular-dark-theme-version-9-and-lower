import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : null;
  }

  get pinkcolor() {
    return this.themeService.theme === 'pinkcolor';
  }

  set pinkcolor(enabled: boolean) {
    this.themeService.theme = enabled ? 'pinkcolor' : null;
  }

  constructor(private themeService: ThemeService) {}
}
