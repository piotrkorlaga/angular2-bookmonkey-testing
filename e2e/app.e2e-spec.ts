import { Angular2BookmonkeyTestingPage } from './app.po';

describe('angular2-bookmonkey-testing App', function() {
  let page: Angular2BookmonkeyTestingPage;

  beforeEach(() => {
    page = new Angular2BookmonkeyTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bm works!');
  });
});
