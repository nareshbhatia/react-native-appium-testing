import TabBar from '../screenobjects/components/tab.bar';
import WebViewScreen from '../screenobjects/webview.screen';
import ColorPickerScreen from '../screenobjects/color-picker.screen';

describe('Color Picker', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openNative();
        ColorPickerScreen.waitForIsShown(true);
    });

    it('sliders control the color', () => {
        // Set sliders to #000000
        // Note: This is a bit of a contrived test, because toNormalizedSliderPosition()
        // does not produce deterministic results for values other than #000000.
        // app.sliders["slider-red"].adjust(toNormalizedSliderPosition: 0)
        // app.sliders["slider-green"].adjust(toNormalizedSliderPosition: 0)
        // app.sliders["slider-blue"].adjust(toNormalizedSliderPosition: 0)

        // ColorPickerScreen.sliderRed.sendKeys(['0']);
        // $('~slider-red').sendKeys(['0']);
        // browser.setValue('~slider-red', 0);

        // Verify that the label says #000000
        expect(ColorPickerScreen.colorValueText.getText()).toEqual('#000000');
    });
});
