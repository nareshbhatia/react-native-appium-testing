const { join } = require('path');

config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
    },
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium',
    },

    path: '/wd/hub',
    port: 4723,

    // ====================
    // Some hooks
    // ====================
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
    },

    specs: ['./tests/specs/**/*.spec.js'],

    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'iOS',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/
            'appium:deviceName': 'iPhone 11',
            'appium:platformVersion': '13.1',
            'appium:orientation': 'PORTRAIT',
            // `automationName` will be mandatory, see
            // https://github.com/appium/appium/releases/tag/v1.13.0
            'appium:automationName': 'XCUITest',
            // The path to the app
            'appium:app': join(process.cwd(), './apps/ReactNativeTesting.app'),
            // Read the reset strategies very well, they differ per platform, see
            // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
            'appium:noReset': true,
            'appium:newCommandTimeout': 240,
        },
    ],
};

exports.config = config;
