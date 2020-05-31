import { browser } from "protractor";

var data = require("./dataFile.json");

var APIURL:string=data.baseUrl;
export class BasePage {
  async OpenBrowser() {
   console.log("Main Url is :"+APIURL);
   await  browser.get(APIURL);
   await  browser.manage().window().maximize();
  }
}