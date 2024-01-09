import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly timeZone: string;

  constructor(
    @Inject(PLATFORM_ID) platformID: Object,
  ) {
    let isServer = isPlatformServer(platformID);

    this.timeZone = isServer ? "server" : Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}
