## Beautiful preloaders for angular

<h4>Hello, you can get here a beautiful preloaders for your angular application <a _blank href="http://fancy-dev.in.ua/ngx-fancy-preloader">see demo</a></h4>
Installation
--------------------------------------

Install it from npm:

```bash
npm install ngx-fancy-preloader
```


Usage
--------------------------------------

### Module

```typescript
...
import {NgxFancyPreloaderModule } from 'ngx-fancy-preloader';
...
```

```typescript
 ...
@NgModule({
  imports: [...,NgxFancyPreloaderModule]
  })
  ...
```

### View

Use in template like below

```html
 <fancy-preloader [loading]="loading" [type]="type"></fancy-preloader>
```

Where loading  is the boolean variable - set visible(true) or hidden(false) for loader.<br>
Where type  is the string variable - set type for loader:<br>
....................................................<br>
export const EVIL_NORMAL             = 'EvilNormal';<br>
export const CIRCLE_SIMPLE           = 'CircleSimple';<br>
export const CANVAS_SNAKE            = 'CanvasSnake';<br>
export const THREE_DOTS_LINE_ACTION  = 'ThreeDotsLineAction';<br>
export const CIRCLE_DOT              = 'CircleDot';<br>
export const CLOCK                   = 'Clock';<br>
export const LOADING_WHOLE_LINE_WISE = 'LoadingWholeLineWise';<br>
..............................................................


### Import
You can import constants from npm
```typescript
import { FancyPreloaderTypes } from 'ngx-fancy-preloader';

private types: string = FancyPreloaderTypes.CIRCLE_DOT;
private loading: boolean = false;
```
