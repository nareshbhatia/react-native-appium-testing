# React Native Appium Testing

A simple project to demonstrate testing of React Native apps using Appium. We
will use the
[ReactNativeTesting](https://github.com/nareshbhatia/react-native-xcui-testing)
app as the application to test.

## Build Instructions

-   Clone this repo on your machine.
-   Run `yarn` to download dependencies.
-   Check iOS configuration in `config/wdio.app.config.js`. Make sure you have
    the iOS simulator specified by `appium:deviceName` and
    `appium:platformVersion`. If not change these settings accordingly.
-   Download the ReactNativeTesting app from the
    [Releases](https://github.com/nareshbhatia/react-native-xcui-testing/releases)
    page. The file is called ReactNativeTesting.app.zip. Unzip this file and
    store it in a folder called `apps` at the root of your local repository (the
    archive should be placed at apps/ReactNativeTesting.app).
-   Download and install [Appium](http://appium.io/).
-   Start the Appium server in a separate shell - the command is `appium`.
-   Open your iOS simulator from Xcode (Xcode > Open Developer Tool >
    Simulator).
-   Now start the Appium tests by typing the following command in a shell:
    `yarn ios.app`
