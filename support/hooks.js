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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const BasePage_1 = require("./BasePage");
var basePage = new BasePage_1.BasePage();
cucumber_1.BeforeAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.ignoreSynchronizaton = true;
    yield basePage.OpenBrowser();
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            // screenShot is a base-64 encoded PNG
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
        // Clearing browser data after each test
        protractor_1.browser.manage().deleteAllCookies();
        protractor_1.browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();');
    });
});
cucumber_1.AfterAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.quit();
}));
