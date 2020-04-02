import TabBar from '../screenobjects/components/tab.bar';
import ColorPickerScreen from '../screenobjects/color-picker.screen';

describe('Color Picker', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openNative();
        ColorPickerScreen.waitForIsShown(true);
    });

    it('sliders control the color', () => {
        // Set sliders to #000000
        // Note: This test does not work due to an Apple bug.
        // The slider is found but its value can't be changed.
        // See https://github.com/appium/appium/issues/8264#issuecomment-294523926

        // const sliderRed = ColorPickerScreen.sliderRed;
        // const sliderRed = $('~slider-red');
        // console.log('slider-red =', JSON.stringify(sliderRed, null, 4));
        // sliderRed.sendKeys(['0']);
        // sliderRed.setValue(['0']);

        // Verify that the label says #000000
        expect(ColorPickerScreen.colorValueText.getText()).toEqual('#000000');
    });
});
