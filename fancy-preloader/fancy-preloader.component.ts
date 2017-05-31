import { Component, Input } from '@angular/core';

import * as LoaderType from './fancy-preloader-type.constants';

@Component({
  selector: 'fancy-preloader',
  templateUrl: './fancy-preloader.component.html',
  styleUrls: ['./fancy-preloader.component.css']
})
export class FancyPreloaderComponent {
  @Input() type:    string;
  @Input() loading: boolean;

  private loaderType: Object = LoaderType;

}
