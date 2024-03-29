const pup = require('puppeteer');
// const pup = require('puppeteer-core');
async function Main () {
    try {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.. start');

        const browser = await pup.launch({ headless: false, slowMo: 100 });
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/');

        await page.waitForSelector('#search');

        await page.click('#search-container');
        await page.keyboard.type('Programmer Bar Bar');
        await page.keyboard.type(String.fromCharCode(13))

        await page.waitForSelector("#avatar-section");
        await page.click('#avatar-section');

        await page.evaluate(() => {
            const video_titles = document.querySelectorAll("a#video-title");
            video_titles.forEach((_, idx) => {
                console.log(video_titles[idx].textContent);
            });
        });
    } catch (error) {
        console.log(error);
    }
}
Main ()