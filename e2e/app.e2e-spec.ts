import { TemplateDevPage } from './app.po';

describe('template-dev App', () => {
  let page: TemplateDevPage;

  beforeEach(() => {
    page = new TemplateDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
