import { NgxFancyPreloaderPage } from './app.po';

describe('ngx-fancy-preloader App', () => {
  let page: NgxFancyPreloaderPage;

  beforeEach(() => {
    page = new NgxFancyPreloaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
