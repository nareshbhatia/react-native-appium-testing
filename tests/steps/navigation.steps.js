import { Given, When, Then } from 'cucumber';
import TabBar from '../screenobjects/components/tab.bar';
import WebViewScreen from '../screenobjects/webview.screen';
import ColorPickerScreen from '../screenobjects/color-picker.screen';
import { CONTEXT_REF } from '../helpers/WebView';

Given(/^I'm on the Native screen$/, () => {
    TabBar.waitForTabBarShown(true);
    TabBar.openNative();
});

Given(/^I'm on the WebView screen$/, () => {
    TabBar.waitForTabBarShown(true);
    TabBar.openWebView();
    WebViewScreen.waitForWebsiteLoaded();
});

When(/^I tap on the WebView tab$/, () => {
    TabBar.openWebView();
    WebViewScreen.waitForWebsiteLoaded();
});

When(/^I tap on the Native tab$/, () => {
    TabBar.openNative();
});

Then(/^the WebView screen is opened$/, () => {
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

    // Verify that ALL is the active tab
    const allTab = $('a=All');
    expect(allTab.getAttribute('class')).toEqual('active');

    WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
});

Then(/^the Native screen is opened$/, () => {
    ColorPickerScreen.waitForIsShown(true);
});
