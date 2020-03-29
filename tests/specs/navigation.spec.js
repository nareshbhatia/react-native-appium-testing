import TabBar from '../screenobjects/components/tab.bar';
import WebViewScreen from '../screenobjects/webview.screen';
import ColorPickerScreen from '../screenobjects/color-picker.screen';

describe('Bottom Tab Bar', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
    });

    it('tapping on WebView tab opens the webview', () => {
        TabBar.openWebView();
        WebViewScreen.waitForWebsiteLoaded();
    });

    it('tapping on Native tab opens the native view', () => {
        TabBar.openNative();
        ColorPickerScreen.waitForIsShown(true);
    });
});
