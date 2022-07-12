Feature: Calculator

  As a user, I want to use the calculator
  to check my calculations

  Scenario: Calculator Application should display header
    Given I access the application
    Then I should see the header

  Scenario: Calculator Application should display calculator
    Given I access the application
    Then I should see the calculator

  Scenario: Headers should display a label
    Given I access the application
    Then I should see the header label

  Scenario: Headers label should be Angular Calculator
    Given I access the application
    And I should see the header label
    Then The header label should be "Angular Calculator"

  Scenario: Headers should have an icon
    Given I access the application
    And I should see the header label
    Then The header should have an icon

  Scenario: Headers should have an icon
    Given I access the application
    And I should see the header label
    And The header should have an icon
    Then The header icon should be "calculate"

  Scenario: Calculator Application should have a display
    Given I access the application
    Then I should see the calculator display

  Scenario: Calculator Application should display 0
    Given I access the application
    Then I should see "0" in calculator display

  Scenario: Calculator Application should have buttons
    Given I access the application
    Then I should see buttons in calculator

  Scenario: Calculator Application should change display value when buttons clicked
    Given I access the application
    And Click in button number "2"
    And Wait a 100ms
    Then I should see number " 2 " in display

  Scenario: Calculator Application should display 0 when operation button clicked after first number
    Given I access the application
    And Click in button number "2"
    And Wait a 100ms
    And Click in button operation "add"
    And Wait a 100ms
    Then I should see number " 0 " in display

  Scenario: Calculator Application should display new number when number button clicked after operation and first number
    Given I access the application
    And Click in button number "2"
    And Wait a 100ms
    And Click in button operation "add"
    And Wait a 100ms
    And Click in button number "6"
    And Wait a 100ms
    Then I should see number " 6 " in display

  Scenario: Calculator Application should display result when equal button clicked after operation, second number, first number
    Given I access the application
    And Click in button number "2"
    And Wait a 100ms
    And Click in button operation "add"
    And Wait a 100ms
    And Click in button number "6"
    And Wait a 100ms
    And Click in button "equal"
    And Wait a 100ms
    Then I should see number " 8 " in display

  Scenario: Calculator Application should display decimal number when decimal button clicked two numbers clicked
    Given I access the application
    And Click in button number "2"
    And Wait a 100ms
    And Click in button "decimal"
    And Wait a 100ms
    And Click in button number "6"
    And Wait a 100ms
    Then I should see number " 2.6 " in display
