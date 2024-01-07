import { Component } from '@angular/core';
import { DeferredComponent } from '../../components/deferred/deferred.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    DeferredComponent,
  ],
  templateUrl: './defer.page.html',
  styleUrl: './defer.page.scss'
})
export class DeferPage {

}
