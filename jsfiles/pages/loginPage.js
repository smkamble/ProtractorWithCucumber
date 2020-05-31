"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPageObject {
    constructor() {
        this.logo = protractor_1.$('.img-responsive.logo');
        this.signInWithGoogleButton = protractor_1.$('.ppm-gmail-button.button');
        this.emailorPhoneTxtBox = protractor_1.$('#identifierId');
        this.passwordTxtBox = protractor_1.element(protractor_1.by.xpath("//input[@name='password']"));
        this.nextButton = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Next')]"));
        this.forgotPasswordButton = protractor_1.element(protractor_1.by.buttonText('Forgot email?'));
    }
    switchToSignInWindow() {
        protractor_1.browser.getAllWindowHandles().then(function (handles) {
            var childwindow = handles[1];
            protractor_1.browser.switchTo().window(childwindow);
        });
    }
}
exports.LoginPageObject = LoginPageObject;
