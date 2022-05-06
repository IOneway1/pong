input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            `)
    }
})
