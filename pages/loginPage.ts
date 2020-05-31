import { $, ElementFinder, browser, element, by } from "protractor";

export class LoginPageObject {

    public signInLabel: ElementFinder=$('#headingText');
    public signInWithGoogleButton: ElementFinder= $('.ppm-gmail-button.button');
    public emailorPhoneTxtBox: ElementFinder= $('#identifierId');
    public passwordTxtBox: ElementFinder= element(by.xpath("//input[@name='password']"));
    public nextButton: ElementFinder= element(by.xpath("//span[contains(text(),'Next')]"));
    public forgotPasswordButton:ElementFinder=element(by.buttonText('Forgot email?'));


    public switchToSignInWindow() {
        browser.getAllWindowHandles().then(function (handles) {
            var childwindow: string = handles[1];
            browser.switchTo().window(childwindow);
        });
    }
}
