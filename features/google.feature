Feature: Google Search
  As a user
  I want to navigate to Google
  So that I can search for "Playwright"
  @rt
  Scenario: Navigate to Google and search for Playwright
    Given I am on the Google homepage
    When I enter "Playwright" in the search bar
    And I click the "Google Search" button
   
