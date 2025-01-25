let _2: game.LedSprite = null
let pas = 1
game.pause()
pas = 1
let score = 0
game.setScore(0)
let go = 1
let _1 = game.createSprite(2, 4)
basic.forever(function () {
    while (go == 1) {
        _2 = game.createSprite(randint(0, 4), 0)
        go = 0
    }
    if (go == 0) {
        if (_2.get(LedSpriteProperty.Y) == 4) {
            _2.delete()
            score += 1
            go = 1
        } else {
            if (game.isPaused()) {
            	
            } else {
                basic.pause(200)
                _2.change(LedSpriteProperty.Y, 1)
            }
        }
        if (_1.isTouching(_2)) {
            game.gameOver()
        }
    }
})
basic.forever(function () {
    game.setScore(score)
    if (input.buttonIsPressed(Button.A)) {
        if (game.isPaused()) {
        	
        } else {
            _1.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (game.isPaused()) {
        	
        } else {
            _1.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (game.isGameOver()) {
        	
        }
    }
    if (input.logoIsPressed()) {
        if (pas == 0) {
            game.resume()
            pas = 1
        } else {
            game.pause()
            pas = 0
        }
    }
})
