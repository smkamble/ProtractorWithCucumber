Feature: To validate Login functionality
    @OutlineScenario
    @Functional @Smoke
    Scenario Outline: Login using valid credentials
        Given I am on Sign-in with Google page and click on it
        When I enter username as "<username>" and click on next button
        And I enter password as "<password>" and click on on next button
        Then I navigate to "home" page

        Examples:
            | username      | password |
            | abc@gmail.com | Test@123 |
