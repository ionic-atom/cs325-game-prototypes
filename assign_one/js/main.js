"use strict";

window.onload = function() {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 1600, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load character and background
        game.load.spritesheet( 'char', 'assets/char_idle.png', 100, 100, 48);
        game.load.image( 'background', 'assets/background_handmade.png');
    }

    // char
    var sprite;
    // background
    var background;

    // input variables
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;

    function create() {

        // Background
        background = game.add.tileSprite(0, 0, 1600, 800, 'background');

        // Character
        sprite = game.add.sprite(0, 0, 'char');
        // Animation
        var idle = sprite.animations.add('idle');
        sprite.animations.play('idle', 24, true);
        // Anchoring sprite to middle
        //sprite.anchor.setTo( 0.5, 0.5 );
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( sprite, Phaser.Physics.ARCADE );
        // Collision with world bounds
        sprite.body.collideWorldBounds = true;

        // Key inputs
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    }

    function update() {

        // Movement updates, justDown is used so there must be a
        // press (move square), release, and press (move sqaure)
        if (upKey.justDown)
        {
            sprite.y -= 100;
        }
        else if (downKey.justDown)
        {
            sprite.y += 100;
        }

        if (leftKey.justDown)
        {
            sprite.x -= 100;
        }
        else if (rightKey.justDown)
        {
            sprite.x += 100;
        }
    }
};
