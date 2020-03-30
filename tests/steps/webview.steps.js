import { When, Then } from 'cucumber';
import WebViewScreen from '../screenobjects/webview.screen';
import { CONTEXT_REF } from '../helpers/WebView';

When(/^I tap on the IMAGES link$/, () => {
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

    // Tap on the IMAGES tab
    $('=IMAGES').click();

    WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
});

Then(/^the Images tab is shown$/, () => {
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

    // Verify that IMAGES is the active tab
    const imagesTab = $('a=Images');
    expect(imagesTab.getAttribute('class')).toEqual('active');

    WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
});
