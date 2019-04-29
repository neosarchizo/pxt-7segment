basic.forever(() => {
    sevenSegment.initialize(DigitalPin.P13, DigitalPin.P14, DigitalPin.P8, DigitalPin.P9, DigitalPin.P10, DigitalPin.P12, DigitalPin.P7);
    sevenSegment.displayNumber(0);
})