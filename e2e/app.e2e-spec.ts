import { TestBedPage } from './app.po';

describe('test-bed App', function() {
  let page: TestBedPage;

  beforeEach(() => {
    page = new TestBedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
