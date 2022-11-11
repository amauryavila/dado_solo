let Valor_dado = 0
let Temp = 0
input.onButtonPressed(Button.A, function () {
    Valor_dado = randint(1, 6)
    basic.showNumber(Valor_dado)
    if (Valor_dado == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    } else if (Valor_dado == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.pause(1000)
    } else if (Valor_dado == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        basic.pause(1000)
    } else if (Valor_dado == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
    } else if (Valor_dado == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
    }
    Temp = 0
    if (Valor_dado > 0) {
        Temp = Temp + Valor_dado
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
})
