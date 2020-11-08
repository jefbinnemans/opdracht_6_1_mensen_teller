let aantal_personen = 0
input.onButtonPressed(Button.A, function () {
    if (aantal_personen < 25) {
        aantal_personen = aantal_personen + 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(aantal_personen)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (aantal_personen != 0) {
        aantal_personen = aantal_personen - 1
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (aantal_personen == 25) {
        basic.showString("Volzet!")
    }
})
