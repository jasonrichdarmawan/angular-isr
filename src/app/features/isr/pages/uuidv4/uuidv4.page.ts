import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uuidv4',
  standalone: true,
  imports: [],
  templateUrl: './uuidv4.page.html',
  styleUrl: './uuidv4.page.scss'
})
export class UUIDv4Page {
  readonly isServer: boolean;
  readonly timeZone: string;
  readonly uuidv4: string;

  constructor(
    route: ActivatedRoute,
    @Inject(PLATFORM_ID) platformID: Object,
  ) {
    this.timeZone = route.snapshot.queryParamMap.get('timeZone') ?? "";

    this.isServer = isPlatformServer(platformID);

    this.uuidv4 = this.isServer ? "server" : "10000000-1000-4000-8000-100000000000".replace(/[0148]/g, c =>
      (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16)
    );
  }

}
