"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var report = require("./support/reporter");
const protractor = require("protractor");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: "https://www.google.com",
    capabilities: {
        browserName: "chrome",
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "./features/*.feature",
    ],
    onPrepare: () => {
        protractor.browser.ignoreSynchronization = true;
        protractor.browser.manage().window().maximize();
        report.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["./stepdefinitions/*.js", "./support/hooks.js"],
        strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },
    onComplete: () => {
        report.Reporter.createHTMLReport();
    }
};