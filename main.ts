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
    } else if (Valor_dado == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
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
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
    Temp = 0
    if (Valor_dado > 0) {
        Temp = Temp + Valor_dado
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.showIcon(IconNames.Yes)
})
