namespace SpriteKind {
    export const Zariel = SpriteKind.create()
    export const Princess = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(destra)) {
        mySprite.image.flipX()
        destra = true
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (destra) {
        mySprite.image.flipX()
        destra = false
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
let palla_di_fuoco_3: Sprite = null
let palla_di_fuoco_2: Sprite = null
let palla_di_fuoco_6: Sprite = null
let palla_di_fuoco: Sprite = null
let palla_di_fuoco_5: Sprite = null
let palla_di_fuoco_4: Sprite = null
let mySprite2: Sprite = null
let destra = false
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    fffffffffffffffffffffff9f991691999996499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffffff9f991691999996499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffffff9f991691999996499466966644444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffffff9f991691999996499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffffff9f991691999996499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffffff9f991691999996499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffffff9f991691999996499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffffffffffff9ff991691999996499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffffffffffff9f9916991999996499466966644444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffffffffffff9f9916919999969496466966644444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffff9ff9916919999964996469666464444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffffff9f99169919999964994669666444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffffffffff9ff99169199999964994669666444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffffffffff9f991699199999694964669666444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffffff9f9f91699199999649946696664644444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffffffff9ff9916991999996949946696664644444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffffff9ff9f196919999996499646966664644444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffffff9ff9f1969919999969499466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    fffffffffffffff9ff9f91699199999964996466966646444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    ffffffffffffff9ff9f91699919999969499466966644644444444444eeee444444444444444444444444444444444444eeee444444444444444444444444444444444444eeee4444444444444444444
    ffffffffffff99ff9f11969919999996e996466966646444444eeeeeeeeeee44444444444444444444444444444eeeeeeeeeee44444444444444444444444444444eeeeeeeeeee444444444444444444
    ffffffffff99ff99f196699199999969e994669666446444eeeeeeeeeeeeee44444444444444444444444444eeeeeeeeeeeeee44444444444444444444444444eeeeeeeeeeeeee444444444444444444
    fffffff999fff9f9196999199999969e99646696664644eeeeeeeeeeeeeeee444444444444444444444444eeeeeeeeeeeeeeee444444444444444444444444eeeeeeeeeeeeeeee444444444444444444
    9999999ffff9991196999199999969e99646696664464eeeeeeeeeeeeeeeee44444444444444444444444eeeeeeeeeeeeeeeee44444444444444444444444eeeeeeeeeeeeeeeee444444444444444444
    ffffffff9999119669991999999969e99466966664644eeeeeeeeeeeeeeeee44444444444444444444444eeeeeeeeeeeeeeeee44444444444444444444444eeeeeeeeeeeeeeeee444444444444444444
    99999999911196699911999999969e99646696664464eeeeeeeeeeeeeeeeeee444444444444444444444eeeeeeeeeeeeeeeeeee444444444444444444444eeeeeeeeeeeeeeeeeee44444444444444444
    1111111119966999119999999969e996e66966644644eeeeeeeeeeeeeeeeeee444444444444444444444eeeeeeeeeeeeeeeeeee444444444444444444444eeeeeeeeeeeeeeeeeee44444444444444444
    999999996669999199999999969e996e66966664644eeeeeeeeeeeeeeeeeeee444444eee44444444444eeeeeeeeeeeeeeeeeeee444444eee44444444444eeeeeeeeeeeeeeeeeeee444444eee44444444
    66666666999911199999999669e996e669666644444eeeeeeeeeeeeeeeeeeee44444eeeee4444444444eeeeeeeeeeeeeeeeeeee44444eeeee4444444444eeeeeeeeeeeeeeeeeeee44444eeeee4444444
    9999999991119999999999699e996e666966644444eeeeeeeeeeeeeeeeeeeee44444eeeee444444444eeeeeeeeeeeeeeeeeeeee44444eeeee444444444eeeeeeeeeeeeeeeeeeeee44444eeeee4444444
    111111111999999999999699e996eee69666446444eeeeeeeeeeeeeeeeeeeee44444eeeee444444444eeeeeeeeeeeeeeeeeeeee44444eeeee444444444eeeeeeeeeeeeeeeeeeeee44444eeeee4444444
    9999999999999999999669ee996eee696664464444eeeeeeeeeeeeeeeeeeeee44444eeeeee44444444eeeeeeeeeeeeeeeeeeeee44444eeeeee44444444eeeeeeeeeeeeeeeeeeeee44444eeeeee444444
    999999999999999996699e99eeee6696666446444eeeeeeeeeeeeeeeeeeeeee44444eeeeee4444444eeeeeeeeeeeeeeeeeeeeee44444eeeeee4444444eeeeeeeeeeeeeeeeeeeeee44444eeeeee444444
    9999999999999996699ee996ee669966664464444eeeeeeeeeeeeeeeeeeeeee44444eeeeee4444444eeeeeeeeeeeeeeeeeeeeee44444eeeeee4444444eeeeeeeeeeeeeeeeeeeeee44444eeeeee444444
    99999999999996699ee99eeee6696666ee4644444eeeeeeeeeeeeeeeeeeeeee4444eeeeeee4444444eeeeeeeeeeeeeeeeeeeeee4444eeeeeee4444444eeeeeeeeeeeeeeeeeeeeee4444eeeeeee444444
    999999999666699ee996e6e66696666eee6444eeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeee4444eeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeee4444eeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeee4444ee
    6666666669999ee9966eee66996666eee644eeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeee44eeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeee44eeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeee44eeee
    9999999994eee9ee6eee666966666eeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeee4eeee
    4444eee449eee666ee666996666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444eeeeeeeeeeeee
    66666666666e6eee6669966666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666666eee66699966666eee66ee2222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222ee
    444eeeeeee666699666666eeee6ee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222
    66666666669999666666eeeee6ee2222222222222eeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222eeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222eeeeeeeeeeeeeeeeeeeeeeeeeee222222222222
    99999999996666666eeeee66ee22222222222222222eeeeeeeeeeeeeeeeeeeeeee22222222222222222eeeeeeeeeeeeeeeeeeeeeee22222222222222222eeeeeeeeeeeeeeeeeeeeeee22222222222222
    6666666666666666eeeee6eee2222222222222222222eeeeeeeeeeeeeeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeeeeee222222222222222
    6666666666666eeee66eeeee222222222222222222222eeeeeeeeeeeeeeeeeee222222222222222222222eeeeeeeeeeeeeeeeeee222222222222222222222eeeeeeeeeeeeeeeeeee2222222222222222
    22222eeeeeeeeee6eeeeeee22222222222222222222222ee22fefefefefefef22222222222222222222222ee22fefefefefefef22222222222222222222222ee22fefefefefefee22222222222222222
    222222eeee6ee6eeeeeeee22f222222222222222222222222222efefefefef22f222222222222222222222222222efefefefef22f222222222222222222222222222efefefefef22f222222222222222
    26262666e6efefefefefe222f2222222222222222222222222fefefefefef222f2222222222222222222222222fefefefefef222f2222222222222222222222222fefefefefef222f222222222222222
    222222222efefefefefe222ff222222222222222222222222fffffffffff222ff222222222222222222222222fffffffffff222ff222222222222222222222222fffffffffff222ff222222222222222
    2222222fefefefefefe22222ff222222222222222222222fffffffffff222222ff222222222222222222222fffffffffff222222ff222222222222222222222fffffffffff222222ff22222222222222
    222222222fffffffff22222ff222222222222222222222222fffffffff22222ff222222222222222222222222fffffffff22222ff222222222222222222222222fffffffff22222ff222222222222222
    222222222fffffff222222ffff22222222222222222222222fffffff222222ffff22222222222222222222222fffffff222222ffff22222222222222222222222fffffff222222ffff22222222222222
    22222222fffffffffff22ffffff222222222222222222222fffffffffff22ffffff222222222222222222222fffffffffff22ffffff222222222222222222222fffffffffff22ffffff2222222222222
    2222222222ffffffffff222ff22222222222f2222222222222ffffffffff222ff22222222222f2222222222222ffffffffff222ff22222222222f2222222222222ffffffffff222ff22222222222f222
    22222222fffffffffff22ffffff222222222f22222222222fffffffffff22ffffff222222222f22222222222fffffffffff22ffffff222222222f22222222222fffffffffff22ffffff222222222f222
    222f222ffffffffffff2ffffffff2222222fff22222f222ffffffffffff2ffffffff2222222fff22222f222ffffffffffff2ffffffff2222222fff22222f222ffffffffffff2ffffffff2222222fff22
    222ff22222ffffffffffffffff2222222222ff22222ff22222ffffffffffffffff2222222222ff22222ff22222ffffffffffffffff2222222222ff22222ff22222ffffffffffffffff2222222222ff22
    22ff2222ffffffffffffffffffff2222222ff22222ff2222ffffffffffffffffffff2222222ff22222ff2222ffffffffffffffffffff2222222ff22222ff2222ffffffffffffffffffff2222222ff222
    222ff22ffffffffffffffffffffff22222ffff22222ff22ffffffffffffffffffffff22222ffff22222ff22ffffffffffffffffffffff22222ffff22222ff22ffffffffffffffffffffff22222ffff22
    22fffffffffffffffffffffffff22222222ffff222fffffffffffffffffffffffff22222222ffff222fffffffffffffffffffffffff22222222ffff222fffffffffffffffffffffffff22222222ffff2
    222ffffffffffffffffffffffffff22222ffff22222ffffffffffffffffffffffffff22222ffff22222ffffffffffffffffffffffffff22222ffff22222ffffffffffffffffffffffffff22222ffff22
    222fffffffffffffffffffffffffff222ffffff2222fffffffffffffffffffffffffff222ffffff2222fffffffffffffffffffffffffff222ffffff2222fffffffffffffffffffffffffff222ffffff2
    22ffffffffffffffffffffffffff222222ffff2222ffffffffffffffffffffffffff222222ffff2222ffffffffffffffffffffffffff222222ffff2222ffffffffffffffffffffffffff222222ffff22
    2fffffffffffffffffffffffffffff22fffffff22fffffffffffffffffffffffffffff22fffffff22fffffffffffffffffffffffffffff22fffffff22fffffffffffffffffffffffffffff22fffffff2
    22fffffffffffffffffffffffffffff22fffffff22fffffffffffffffffffffffffffff22fffffff22fffffffffffffffffffffffffffff22fffffff22fffffffffffffffffffffffffffff22fffffff
    22ffffffffffffffffffffffffffff22ffffffff22ffffffffffffffffffffffffffff22ffffffff22ffffffffffffffffffffffffffff22ffffffff22ffffffffffffffffffffffffffff22ffffffff
    fffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff2ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 6 f . . . 
    . . . f f e e e e f 6 6 6 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 6 6 6 6 e f . 
    . . . f e 6 6 6 f f f f e 6 f . 
    . . . f f f f f f e e e f f f . 
    . . . f e 8 8 f b 9 e e e e f . 
    . . f e e 8 d 8 1 9 d d e f . . 
    . . f e e e e 8 d d d d f . . . 
    . . e f e f e e 8 8 8 e f . . . 
    . . e e f 6 d d e 6 6 6 f . . . 
    . . . . . e d d e 6 6 6 f . . . 
    . . . . . f e e f 8 1 1 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f 6 f . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
controller.moveSprite(mySprite, 100, 0)
destra = false
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
for (let value of tiles.getTilesByType(assets.tile`tile4`)) {
    mySprite2 = sprites.create(img`
        . . . . . . 6 . 6 . . . . . . . 
        . . . . . f 6 6 6 f f . . . . . 
        . . . . f 1 6 6 6 1 9 f . . . . 
        . . . f 1 9 9 9 9 9 1 9 f . . . 
        . . . f 9 9 f f f f 9 1 f . . . 
        . . . f 9 f f d d f f 9 f . . . 
        . . f 9 f 1 1 1 1 1 1 f 9 f . . 
        . . f 9 f d 3 d d 3 d f 9 f . . 
        . . f 9 9 f d d d d f 9 9 f . . 
        . f 9 9 f 6 f f f f 6 f 9 9 f . 
        . . f f c b 1 b b 1 b c f f . . 
        . . f d b f 9 1 1 9 f b d f . . 
        . . . f f b b b b b b f f . . . 
        . . . f b b c b b c b b f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . b b . . b b . . . . . 
        `, SpriteKind.Princess)
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    game.splash("testtesttest")
    music.playMelody("C5 C5 B B A A G G ", 120)
    game.splash("dannazione...")
}
game.onUpdateInterval(1000, function () {
    palla_di_fuoco_4 = sprites.createProjectileFromSide(img`
        . . . . 8 8 8 8 8 8 . . . . . . . . . . 
        . . . 8 9 9 9 1 6 6 8 . . 8 . . . . . . 
        . . 8 9 9 1 1 9 9 6 8 8 8 . . . . . . . 
        . 8 8 9 1 1 9 9 9 6 6 8 6 8 8 8 . 8 . . 
        8 9 9 1 1 9 9 9 9 9 9 6 8 8 . . . . . . 
        8 9 1 1 1 9 9 9 9 9 9 6 8 9 8 8 . . . . 
        8 9 1 1 9 9 9 9 9 9 6 6 8 6 6 8 8 8 8 8 
        8 9 1 1 9 9 9 9 9 9 6 1 8 9 9 6 8 . . . 
        8 9 9 1 1 9 9 9 9 6 6 1 8 8 6 8 8 8 8 . 
        . 8 1 9 1 1 9 9 6 6 1 8 9 6 8 . . . . . 
        . . 8 1 1 6 6 6 9 6 8 6 8 8 6 8 8 . . . 
        . . . 8 6 1 6 1 6 8 8 8 6 6 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 6 8 . 8 8 . 8 . . 
        . . . . . 8 8 8 . 8 . . . 8 . . . . . . 
        `, -75, 0)
    tiles.placeOnTile(palla_di_fuoco_4, tiles.getTileLocation(29, 18))
})
game.onUpdateInterval(1000, function () {
    palla_di_fuoco_5 = sprites.createProjectileFromSide(img`
        . . . . 8 8 8 8 8 8 . . . . . . . . . . 
        . . . 8 9 9 9 1 6 6 8 . . 8 . . . . . . 
        . . 8 9 9 1 1 9 9 6 8 8 8 . . . . . . . 
        . 8 8 9 1 1 9 9 9 6 6 8 6 8 8 8 . 8 . . 
        8 9 9 1 1 9 9 9 9 9 9 6 8 8 . . . . . . 
        8 9 1 1 1 9 9 9 9 9 9 6 8 9 8 8 . . . . 
        8 9 1 1 9 9 9 9 9 9 6 6 8 6 6 8 8 8 8 8 
        8 9 1 1 9 9 9 9 9 9 6 1 8 9 9 6 8 . . . 
        8 9 9 1 1 9 9 9 9 6 6 1 8 8 6 8 8 8 8 . 
        . 8 1 9 1 1 9 9 6 6 1 8 9 6 8 . . . . . 
        . . 8 1 1 6 6 6 9 6 8 6 8 8 6 8 8 . . . 
        . . . 8 6 1 6 1 6 8 8 8 6 6 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 6 8 . 8 8 . 8 . . 
        . . . . . 8 8 8 . 8 . . . 8 . . . . . . 
        `, -75, 0)
    tiles.placeOnTile(palla_di_fuoco_5, tiles.getTileLocation(29, 27))
})
game.onUpdateInterval(1000, function () {
    palla_di_fuoco = sprites.createProjectileFromSide(assets.image`palla di fuoco`, 75, 0)
    tiles.placeOnTile(palla_di_fuoco, tiles.getTileLocation(0, 13))
})
game.onUpdateInterval(1000, function () {
    palla_di_fuoco_6 = sprites.createProjectileFromSide(img`
        . . . . 8 8 8 8 8 8 . . . . . . . . . . 
        . . . 8 9 9 9 1 6 6 8 . . 8 . . . . . . 
        . . 8 9 9 1 1 9 9 6 8 8 8 . . . . . . . 
        . 8 8 9 1 1 9 9 9 6 6 8 6 8 8 8 . 8 . . 
        8 9 9 1 1 9 9 9 9 9 9 6 8 8 . . . . . . 
        8 9 1 1 1 9 9 9 9 9 9 6 8 9 8 8 . . . . 
        8 9 1 1 9 9 9 9 9 9 6 6 8 6 6 8 8 8 8 8 
        8 9 1 1 9 9 9 9 9 9 6 1 8 9 9 6 8 . . . 
        8 9 9 1 1 9 9 9 9 6 6 1 8 8 6 8 8 8 8 . 
        . 8 1 9 1 1 9 9 6 6 1 8 9 6 8 . . . . . 
        . . 8 1 1 6 6 6 9 6 8 6 8 8 6 8 8 . . . 
        . . . 8 6 1 6 1 6 8 8 8 6 6 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 6 8 . 8 8 . 8 . . 
        . . . . . 8 8 8 . 8 . . . 8 . . . . . . 
        `, -75, 0)
    tiles.placeOnTile(palla_di_fuoco_6, tiles.getTileLocation(29, 8))
})
game.onUpdateInterval(1000, function () {
    palla_di_fuoco_2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . . 8 . . 8 6 6 1 9 9 9 8 . . . 
        . . . . . . . 8 8 8 6 9 9 1 1 9 9 8 . . 
        . . 8 . 8 8 8 6 8 6 6 9 9 9 1 1 9 8 8 . 
        . . . . . . 8 8 6 9 9 9 9 9 9 1 1 9 9 8 
        . . . . 8 8 9 8 6 9 9 9 9 9 9 1 1 1 9 8 
        8 8 8 8 8 6 6 8 6 6 9 9 9 9 9 9 1 1 9 8 
        . . . 8 6 9 9 8 1 6 9 9 9 9 9 9 1 1 9 8 
        . 8 8 8 8 6 8 8 1 6 6 9 9 9 9 1 1 9 9 8 
        . . . . . 8 6 9 8 1 6 6 9 9 1 1 9 1 8 . 
        . . . 8 8 6 8 8 6 8 6 9 6 6 6 1 1 8 . . 
        . . . . . . 6 6 8 8 8 6 1 6 1 6 8 . . . 
        . . 8 . 8 8 . 8 6 8 8 8 8 8 8 8 8 . . . 
        . . . . . . 8 . . . 8 . 8 8 8 . . . . . 
        `, 75, 0)
    tiles.placeOnTile(palla_di_fuoco_2, tiles.getTileLocation(0, 23))
})
game.onUpdateInterval(1000, function () {
    palla_di_fuoco_3 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . . 8 . . 8 6 6 1 9 9 9 8 . . . 
        . . . . . . . 8 8 8 6 9 9 1 1 9 9 8 . . 
        . . 8 . 8 8 8 6 8 6 6 9 9 9 1 1 9 8 8 . 
        . . . . . . 8 8 6 9 9 9 9 9 9 1 1 9 9 8 
        . . . . 8 8 9 8 6 9 9 9 9 9 9 1 1 1 9 8 
        8 8 8 8 8 6 6 8 6 6 9 9 9 9 9 9 1 1 9 8 
        . . . 8 6 9 9 8 1 6 9 9 9 9 9 9 1 1 9 8 
        . 8 8 8 8 6 8 8 1 6 6 9 9 9 9 1 1 9 9 8 
        . . . . . 8 6 9 8 1 6 6 9 9 1 1 9 1 8 . 
        . . . 8 8 6 8 8 6 8 6 9 6 6 6 1 1 8 . . 
        . . . . . . 6 6 8 8 8 6 1 6 1 6 8 . . . 
        . . 8 . 8 8 . 8 6 8 8 8 8 8 8 8 8 . . . 
        . . . . . . 8 . . . 8 . 8 8 8 . . . . . 
        `, 75, 0)
    tiles.placeOnTile(palla_di_fuoco_3, tiles.getTileLocation(0, 4))
})
