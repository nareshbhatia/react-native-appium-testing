export default class TabBar {
    static openNative() {
        $('~bottom-tab-bar-native').click();
    }

    static openWebView() {
        $('~bottom-tab-bar-webview').click();
    }

    static waitForTabBarShown() {
        $('~bottom-tab-bar-native').waitForDisplayed(20000);
    }
}
