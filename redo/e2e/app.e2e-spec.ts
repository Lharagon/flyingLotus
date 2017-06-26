import { RedoPage } from './app.po';

describe('redo App', () => {
  let page: RedoPage;

  beforeEach(() => {
    page = new RedoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
