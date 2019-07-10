import { browser, ExpectedConditions as EC } from "protractor"
import { LoginPageObject } from "../pages/loginPage";
import { Given, Before, When, Then } from 'cucumber';
const expect = require('chai').use(require("chai-as-promised")).expect;
const login: LoginPageObject = new LoginPageObject();

Given('I am on Sign-in with Google page and click on it', { timeout: 90 * 2000 }, async function () {
     await browser.wait(EC.visibilityOf(login.signInWithGoogleButton), 10000);
     login.signInWithGoogleButton.isPresent();
     expect(login.signInWithGoogleButton.isPresent(),true,"Failed to load page");
    // await browser.actions().mouseMove(login.signInWithGoogleButton).click().perform();
     await browser.sleep(3000);
     await login.signInWithGoogleButton.click();
});

When('I enter username as {string} and click on next button', { timeout: 90 * 2000 }, async function (username: string) {
     await login.switchToSignInWindow();
     await browser.sleep(3000);
     await login.emailorPhoneTxtBox.sendKeys(username);
     await login.nextButton.click();
});


When('I enter password as {string} and click on on next button', { timeout: 90 * 1000 }, async function (password: string) {
     await browser.wait(EC.presenceOf(login.passwordTxtBox), 10000);
     await login.passwordTxtBox.sendKeys(password);
     await login.nextButton.click();
});

Then('I navigate to {string} page', function (text: string) {

});