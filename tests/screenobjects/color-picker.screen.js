import AppScreen from './app.screen';

const SELECTORS = {
    COLOR_PICKER_SCREEN: '~color-picker-screen',
    SLIDER_RED: '~slider-red',
    SLIDER_GREEN: '~slider-green',
    SLIDER_BLUE: '~slider-blue',
    COLOR_VALUE_TEXT: '~color-value-text',
};

class ColorPickerScreen extends AppScreen {
    constructor() {
        super(SELECTORS.COLOR_PICKER_SCREEN);
    }

    get sliderRed() {
        return $(SELECTORS.SLIDER_RED);
    }

    get sliderGreen() {
        return $(SELECTORS.SLIDER_GREEN);
    }

    get sliderBlue() {
        return $(SELECTORS.SLIDER_BLUE);
    }

    get colorValueText() {
        return $(SELECTORS.COLOR_VALUE_TEXT);
    }
}

export default new ColorPickerScreen();
