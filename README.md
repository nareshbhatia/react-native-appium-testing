# React Native Appium Testing

A simple project to demonstrate testing of React Native apps using Appium. We
show writing tests in two different frameworks: Jasmine and Cucumber. We use
[ReactNativeTesting](https://github.com/nareshbhatia/react-native-xcui-testing)
app as the application to test.

## Build Instructions

-   Clone this repo on your machine.
-   Run `yarn` to download dependencies.
-   Check iOS configuration in `config/wdio.ios.jasmine.conf.js`. Make sure you
    have the iOS simulator specified by `appium:deviceName` and
    `appium:platformVersion`. If not change these settings accordingly.
-   Similarly, check iOS configuration in `config/wdio.ios.cucumber.conf.js`.
-   Download the ReactNativeTesting app from the
    [Releases](https://github.com/nareshbhatia/react-native-xcui-testing/releases)
    page. The file is called ReactNativeTesting.app.zip. Unzip this file and
    store it in a folder called `apps` at the root of your local repository (the
    archive should be placed at apps/ReactNativeTesting.app).
-   Install [Appium](http://appium.io/) using the following command:
    `npm install -g appium`.
-   Install Carthage dependency manager: `brew install carthage`. (This is a
    dependency for the XCUITest Driver used by Appium - details
    [here](http://appium.io/docs/en/drivers/ios-xcuitest/))

### To run tests using the Jasmine framework

Open your iOS simulator from Xcode (Xcode > Open Developer Tool > Simulator).
Then run the following commands in two different shells.

```bash
appium --log-level info  # in shell 1
yarn ios.jasmine         # in shell 2
```

### To run tests using the Cucumber framework

Open your iOS simulator from Xcode (Xcode > Open Developer Tool > Simulator).
Then run the following commands in two different shells.

```bash
appium --log-level info  # in shell 1
yarn ios.cucumber        # in shell 2
```
