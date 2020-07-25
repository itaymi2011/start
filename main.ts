input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("adi")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
})
basic.forever(function () {
	
})
