import { JetbluePage } from './app.po';

describe('jetblue App', () => {
  let page: JetbluePage;

  beforeEach(() => {
    page = new JetbluePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
