Feature: Ability to host Google home page in the WebView

  Scenario: Tapping on IMAGES link switches to Images tab
    Given I'm on the WebView screen
    When I tap on the IMAGES link
    Then the Images tab is shown
