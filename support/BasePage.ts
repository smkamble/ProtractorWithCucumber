import { browser, element, by, protractor, $$, $ } from "protractor";
var BPromise = require("bluebird");
const request = BPromise.promisifyAll(require("request-promise"));
var config = require("../../support/dataFile.json");

var APIURL:string=config.apiurl;
export class BasePage {
  async OpenBrowser() {
   await  this.apiPostRequest();
   console.log("Main Url is :"+APIURL);
   await  browser.get(APIURL);
   await  browser.manage().window().maximize();
  }

  //Generete an url using Request Promise library
  async apiPostRequest() {
    const postoptions = {
      strictSSL: false,
      method: "POST",
      uri: "https://10.18.2.41/PlannedPayments/api/invoke",
      header: { "content-type": "application/json" },
      body: {
        requestId: "shweta_test1",
        header: {
          siteId: 12,
          plannedPaymentId: 12
        },
        routing: {
          backUrl: "https://...client/back",
          cancelUrl: "https://...client/error"
        },
        additionalInstructions: {
          merchantCode: "M0012",
          acceptedCards: ["DEBIT"],
          countryCode: 826,
          currencyCode: 826
        },
        item: {
          summary: {
            code: "ITM01",
            description: "College degree- Shweta Test",
            reference: "9852130002222"
          },
          balance: {
            template: ["CO1", "CO2", "CO3"],
            amount: 2500.5
          }
        }
      },
      json: true // Automatically stringifies the body to JSON
    };
    await request(postoptions)
    .then(function (response) {
        console.log("POST succeeded and url is : ", response.result.redirectUrl);
        var parsedURL= response.result.redirectUrl.split('#/')[1];
        APIURL=APIURL.concat(parsedURL);
    })
    .catch(function (error) {
      console.log("POST-Error :" + error);
    });    
    //return deferred.promise;
    Promise.resolve(true);
  }
}
