import TabBar from '../screenobjects/components/tab.bar';
import WebViewScreen from '../screenobjects/webview.screen';
import { CONTEXT_REF } from '../helpers/WebView';

describe('WebView,', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openWebView();
        WebViewScreen.waitForWebsiteLoaded();
    });

    it('Tapping on IMAGES link switches to Images tab', () => {
        // To be able to use the site in the webview webdriver.io first needs
        // change the context from native to webview
        WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

        // Verify that ALL is the active tab
        const allTab = $('a=All');
        expect(allTab.getAttribute('class')).toEqual('active');

        // Now the site can be accessed like you would automate a normal website
        // keep in mind the responsiveness
        // Open the API docs
        $('=IMAGES').click();

        // Verify that IMAGES is the active tab
        const imagesTab = $('a=Images');
        expect(imagesTab.getAttribute('class')).toEqual('active');

        /**
         * IMPORTANT!!
         *  Because the app is not closed and opened between the 2 tests
         *  (and thus is NOT starting in the default context which is native)
         *  the context is here set to native. This is bad practice,
         *  because you should never rely on the state of a different test,
         *  but here it is excepted ;-)
         */
        WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
    });
});
