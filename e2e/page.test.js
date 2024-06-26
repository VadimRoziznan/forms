import puppeteer from "puppeteer";


jest.setTimeout(40000);
describe('Clicking a button', () => {
  let browser;
  let page;
  
// eslint-disable-next-line
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 1000,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('The button should have the aria-describedby attribute added', async () => {
    
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.container');

    const button = await page.$('.bd-example button.btn.btn-secondary');
    await button.click();

    await page.waitForSelector('.popover');

    const ariaDescribedBy = await button.evaluate(btn => {
        return btn.getAttribute('aria-describedby');
    });

    expect(ariaDescribedBy).not.toBeNull();
});

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });
});
