"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_1 = require("../pages/loginPage");
const cucumber_1 = require("cucumber");
const expect = require('chai').use(require("chai-as-promised")).expect;
const login = new loginPage_1.LoginPageObject();
cucumber_1.Given('I am on Sign-in with Google page and click on it', { timeout: 100 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(login.signInWithGoogleButton), 10000);
        login.signInWithGoogleButton.isPresent();
        expect(login.signInWithGoogleButton.isPresent(), true, "Failed to load page");
        // await browser.actions().mouseMove(login.signInWithGoogleButton).click().perform();
        yield protractor_1.browser.sleep(3000);
        yield login.signInWithGoogleButton.click();
    });
});
cucumber_1.When('I enter username as {string} and click on next button', { timeout: 100 * 1000 }, function (username) {
    return __awaiter(this, void 0, void 0, function* () {
        yield login.switchToSignInWindow();
        yield protractor_1.browser.sleep(3000);
        yield login.emailorPhoneTxtBox.sendKeys(username);
        yield login.nextButton.click();
    });
});
cucumber_1.When('I enter password as {string} and click on on next button', { timeout: 100 * 1000 }, function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(login.passwordTxtBox), 10000);
        yield login.passwordTxtBox.sendKeys(password);
        yield login.nextButton.click();
    });
});
cucumber_1.Then('I navigate to {string} page', { timeout: 100 * 1000 }, function (text) {
});
