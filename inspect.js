import puppeteer from 'puppeteer';

(async () => {
    console.log("Launching browser...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR (Uncaught):', error.message));
    page.on('requestfailed', request => {
        console.error('FAILED REQUEST:', request.url(), request.failure().errorText);
    });

    console.log("Navigating to live Vercel site...");
    await page.goto('https://daniel-blood-author.vercel.app/', { waitUntil: 'networkidle0' });

    console.log("Waiting 3 seconds...");
    await new Promise(r => setTimeout(r, 3000));

    const rootHtml = await page.$eval('#root', el => el.innerHTML);
    const bodyHtml = await page.$eval('body', el => el.innerHTML);

    console.log("--- ROOT HTML ---");
    console.log(rootHtml || "(Empty)");

    console.log("--- BODY HTML ---");
    console.log(bodyHtml.substring(0, 500) + '...');

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    // Evaluate if React threw any internal errors in window object
    const reactDevtoolsInfo = await page.evaluate(() => {
        return window.__REACT_DEVTOOLS_GLOBAL_HOOK__ ? "DevTools Hook Present" : "No DevTools Hook";
    });
    console.log("REACT HOOK STATS:", reactDevtoolsInfo);

    await browser.close();
})();
