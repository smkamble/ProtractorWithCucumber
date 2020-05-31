import { BeforeAll, After, AfterAll, Status } from "cucumber";
import { browser } from "protractor";
import { BasePage } from "./BasePage";

var basePage = new BasePage();
BeforeAll({timeout: 100 * 1000}, async () => {
    browser.ignoreSynchronizaton = true;
    await basePage.OpenBrowser();
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
    // Clearing browser data after each test
    browser.manage().deleteAllCookies();
    browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
