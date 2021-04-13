let msg = "hello world"
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . 7 3 3 7 7 7 . . . . . . 
    . . . . 7 3 3 7 . . . . . . . . 
    . . . . 7 3 3 7 . . . . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(70, 88)
scene.setBackgroundColor(9)
mySprite.say(msg, 500)
console.log("hello console")
pause(500)
let theothermessage = "wassupdoc"
let sprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 . . . . . . . 7 
    . . . . 1 1 1 1 1 1 1 1 . . . 7 
    . . . . 4 4 4 4 4 4 4 4 4 4 4 7 
    . . . . . . 1 1 1 1 1 1 1 1 1 7 
    . . . . . . . . . . 1 1 1 1 1 7 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(70, 19)
scene.setBackgroundColor(6)
sprite2.say(theothermessage, 500)
console.log("wassupdoc")
