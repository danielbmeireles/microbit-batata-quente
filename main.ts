let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    while (timer > 0) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.No)
})
