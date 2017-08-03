import { HNPage } from './app.po';

describe('hn App', () => {
  let page: HNPage;

  beforeEach(() => {
    page = new HNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
