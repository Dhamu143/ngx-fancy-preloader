import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FancyPreloaderComponent } from './fancy-preloader/fancy-preloader.component';
import { ThreeDotsLineActionComponent } from './fancy-preloader/three-dots-line-action/three-dots-line-action.component';
import { ClockComponent } from './fancy-preloader/clock/clock.component';
import { CircleDotComponent } from './fancy-preloader/circle-dot/circle-dot.component';
import { LoadingWholeLineWiseComponent } from './fancy-preloader/loading-whole-line-wise/loading-whole-line-wise.component';
import { EvilLoaderNormalComponent } from './fancy-preloader/evil-loader-normal/evil-loader-normal.component';
import { CircleSimpleComponent } from './fancy-preloader/circle-simple/circle-simple.component';
import { CanvasSnakeComponent } from './fancy-preloader/canvas-snake/canvas-snake.component'

import * as FancyPreloaderTypesConstants from './fancy-preloader/fancy-preloader-type.constants';

@NgModule({
  declarations: [
    FancyPreloaderComponent,
    ClockComponent,
    CircleDotComponent,
    LoadingWholeLineWiseComponent,
    ThreeDotsLineActionComponent,
    EvilLoaderNormalComponent,
    CircleSimpleComponent,
    CanvasSnakeComponent
  ],
  exports: [FancyPreloaderComponent],
  imports: [BrowserModule]
})

export class NgxFancyPreloaderModule {}

export const FancyPreloaderTypes = FancyPreloaderTypesConstants;
