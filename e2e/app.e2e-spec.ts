import { DessertsPage } from './app.po';

describe('desserts App', () => {
  let page: DessertsPage;

  beforeEach(() => {
    page = new DessertsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
