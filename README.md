# React Native Appium Testing

A simple project to demonstrate testing of React Native apps using Appium. We
show writing tests in two different frameworks: Jasmine and Cucumber. We use
[ReactNativeTesting](https://github.com/nareshbhatia/react-native-xcui-testing)
app as the application to test.

## Build Instructions

-   First build the React Native app that we will be testing. Follow the
    instructions in the README file for
    [ReactNativeTesting](https://github.com/nareshbhatia/react-native-xcui-testing).
    Make sure you are doing a release build and keep the resulting archive in a
    handy place.
-   Clone this repo on your machine.
-   Run `yarn` to download dependencies.
-   Check iOS configuration in `config/wdio.ios.jasmine.conf.js`. Make sure you
    have the iOS simulator specified by `appium:deviceName` and
    `appium:platformVersion`. If not change these settings accordingly.
-   Similarly, check iOS configuration in `config/wdio.ios.cucumber.conf.js`.
-   Create a folder called `apps` under the root of your local repository.
-   Place the app archive you created in step 1 under this directory. So the
    archive should be located at apps/ReactNativeTesting.app.
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

## Troubleshooting

-   If your machine is running with a proxy (as required by many enterprise
    networks), Appium may not work correctly. You may see network errors with
    status code of 403 when
    [WebDriverAgent](https://github.com/facebookarchive/WebDriverAgent) (used by
    Appium) tries to hit port 8100. In such cases, add port 8100 to you
    `NO_PROXY` list. This is generally done by setting an environment variable
    in your shell startup script (such as .bashrc or .zshrc). Here's an example:

```bash
export NO_PROXY=localhost,127.0.0.1:8100
```
