const {remote} = require('webdriveio');
const assert = require('assert');

let browser;

;(async () => {
    browser = await remote({
        capabilities: {browserName: 'chrome'}
    })

        await browser.navigateTo('http://localhost:3000/bmi')

        const heightField = await browser.$('#heightField')
        await heightField.type('1.8')

        const weightField = await browser.$('#weightField')
        await weightField.type('75')

        const submitBtn = await browser.$('#submitBtn')
        await submitBtn.click()

        const pageTitle = await browser.getTitle();
        assert(pageTitle === 'Document');

        await browser.deleteSession();

}) ().catch((err)) => {
        console.error(err);  
        return browser.deleteSession();
    }

/*
try{
    (async () => {
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/bmi');

        const heightField = await page.$('#heightField');
        await heightField.type('1.8');

        const weightField = await page.$('#weightField');
        await weightField.type('75');

        const submitBtn = await page.$('#submitBtn');
        await submitBtn.click();    

        const pageTitle = await page.title();
        assert(pageTitle === 'Document');

        console.log("Title Matched successfully");

        await browser.close();

    })
} catch (err){
    console.error(err);
}*/