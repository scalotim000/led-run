_2: game.LedSprite = None
pas = 1
game.pause()
pas = 1
score = 0
game.set_score(0)
go = 1
_1 = game.create_sprite(2, 4)

def on_forever():
    global _2, go, score
    while go == 1:
        _2 = game.create_sprite(randint(0, 4), 0)
        go = 0
    if go == 0:
        if _2.get(LedSpriteProperty.Y) == 4:
            _2.delete()
            score += 1
            go = 1
        else:
            if game.is_paused():
                pass
            else:
                basic.pause(200)
                _2.change(LedSpriteProperty.Y, 1)
        if _1.is_touching(_2):
            game.game_over()
basic.forever(on_forever)

def on_forever2():
    global pas
    game.set_score(score)
    if input.button_is_pressed(Button.A):
        if game.is_paused():
            pass
        else:
            _1.change(LedSpriteProperty.X, -1)
            basic.pause(100)
    if input.button_is_pressed(Button.B):
        if game.is_paused():
            pass
        else:
            _1.change(LedSpriteProperty.X, 1)
            basic.pause(100)
    if input.button_is_pressed(Button.AB):
        if game.is_game_over():
            pass
    if input.logo_is_pressed():
        if pas == 0:
            game.resume()
            pas = 1
        else:
            game.pause()
            pas = 0
basic.forever(on_forever2)
