const pup = require('puppeteer');
// const pup = require('puppeteer-core');

const sleep_in_seconds = 1000 * 30
function infiniteLoop() {
    Main()
    setTimeout(() => {
        infiniteLoop();
    }, sleep_in_seconds)
}

infiniteLoop();

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
        setTimeout(async () => {
            await browser.close();
        }, 3000)
    } catch (error) {
        console.log(error);
    }
}