"use strict";
const protractor_1 = require("protractor");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    //baseUrl: "https://www.google.com",
    capabilities: {
        browserName: "chrome",
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "./features/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["./stepdefinitions/*.js"],
        strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },
};