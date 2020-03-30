Feature: Navigation using the bottom tab bar

  Scenario: Switch from Native to WebView screen
    Given I'm on the Native screen
    When I tap on the WebView tab
    Then the WebView screen is opened

  Scenario: Switch from WebView to Native screen
    Given I'm on the WebView screen
    When I tap on the Native tab
    Then the Native screen is opened
