input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 100)
    pins.analogWritePin(AnalogPin.P1, 100)
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 10)
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 100)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 10)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 100)
    basic.pause(200)
})
