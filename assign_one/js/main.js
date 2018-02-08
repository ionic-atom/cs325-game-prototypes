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
        // Load Character and Background
        game.load.spritesheet( 'char', 'assets/spritesheet_idle.png', 100, 100, 48);
        game.load.image( 'background', 'assets/background_handmade.png');

        // Load Enemies
        game.load.spritesheet( 'en_one', 'assets/spritesheet_rock1.png', 100, 100, 48);
        game.load.spritesheet( 'en_two', 'assets/spritesheet_rock2.png', 100, 100, 48);
        game.load.spritesheet( 'en_three', 'assets/spritesheet_rock3.png', 100, 100, 48);
    }

    // char
    var sprite;

    // Enemies
    var enemy_one;
    var enemy_two;
    var enemy_three;

    // Enemy Pits
    var enpit_one;
    var enpit_two;
    var enpit_three;

    // background
    var background;

    // input variables
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;

    function create() {

        // Background ===============================================
        background = game.add.tileSprite(0, 0, 1600, 800, 'background');

        enpit_one = game.add.sprite(1600, 0, 'en_one');
        enpit_two = game.add.sprite(1600, 800, 'en_two');
        enpit_three = game.add.sprite(0, 800, 'en_three');

        var enpit_one_an = enpit_one.animations.add('stay1');
        var enpit_two_an = enpit_two.animations.add('stay2');
        var enpit_three_an = enpit_three.animations.add('stay3');
        enpit_one.animations.play('stay1', 24, true);
        enpit_two.animations.play('stay2', 24, true);
        enpit_three.animations.play('stay3', 24, true);
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( enpit_one, Phaser.Physics.ARCADE );
        game.physics.enable( enpit_two, Phaser.Physics.ARCADE );
        game.physics.enable( enpit_three, Phaser.Physics.ARCADE );
        // Collision with world bounds
        enpit_one.body.collideWorldBounds = true;
        enpit_two.body.collideWorldBounds = true;
        enpit_three.body.collideWorldBounds = true;
        // ==========================================================

        // Character ================================================
        sprite = game.add.sprite(300, 0, 'char');
        // Animation
        var idle = sprite.animations.add('hover');
        sprite.animations.play('hover', 24, true);
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( sprite, Phaser.Physics.ARCADE );
        // Collision with world bounds
        sprite.body.collideWorldBounds = true;
        // Key inputs for character
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        // ==========================================================

        // Enemies ==================================================
        enemy_one = game.add.sprite(1200, 200, 'en_one');
        enemy_two = game.add.sprite(800, 400, 'en_two');
        enemy_three = game.add.sprite(1600, 600, 'en_three');
        var en_idle1 = enemy_one.animations.add('hover1');
        var en_idle2 = enemy_two.animations.add('hover2');
        var en_idle2 = enemy_three.animations.add('hover3');
        enemy_one.animations.play('hover1', 24, true);
        enemy_two.animations.play('hover2', 24, true);
        enemy_three.animations.play('hover3', 24, true);
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( enemy_one, Phaser.Physics.ARCADE );
        game.physics.enable( enemy_two, Phaser.Physics.ARCADE );
        game.physics.enable( enemy_three, Phaser.Physics.ARCADE );
        // Collision with world bounds
        enemy_one.body.collideWorldBounds = true;
        enemy_two.body.collideWorldBounds = true;
        enemy_three.body.collideWorldBounds = true;
        // ==========================================================
    }

    function update() {

        // Movement updates, justDown is used so there must be a
        // press (move square), release, and press (move sqaure)
        if (upKey.justDown && sprite.y != 0){
            sprite.y -= 100;
            // Enemy_one (Brown Rock)
            if ((enemy_one.y == 0) && (enemy_one.x = 1500)){
                //enemy_one.y = -100;
            }
            else{
                enemy_one.y -= 100;
            }

            // Enemy_two (Red Rock)
            if ((enemy_two.y == 700) && (enemy_two.x == 1500)){
                //enemy_two.y -= 100;
            }
            else{
                enemy_two.y -= 100;
            }

            // Enemy_three (Purple Rock)
            if ((enemy_three.y == 700) && (enemy_three.x == 0)){
                //enemy_three.y += 100;
            }
            else{
                enemy_three.y -= 100;
            }

        }
        else if (downKey.justDown && sprite.y != 700){
            sprite.y += 100;
            // Enemy_one (Brown Rock)
            if ((enemy_one.y == 0) && (enemy_one.x == 1500)){
                //enemy_one.y += 100;
            }
            else{
                enemy_one.y += 100;
            }

            // Enemy_two (Red Rock)
            if ((enemy_two.y == 700) && (enemy_two.x == 1500)){
                //enemy_two.y -= 100;
            }
            else{
                enemy_two.y += 100;
            }

            // Enemy_three (Purple Rock)
            if ((enemy_three.y == 700) && (enemy_three.x == 0)){
                //enemy_three.y -= 100;
            }
            else{
                enemy_three.y += 100;
            }
        }
        if (leftKey.justDown && sprite.x != 0){
            sprite.x -= 100;
            // Enemy_one (Brown Rock)
            if ((enemy_one.y == 0) && (enemy_one.x == 1500)){
                //enemy_one.x += 100;
            }
            else{
                enemy_one.x -= 100;
            }

            // Enemy_two (Red Rock)
            if ((enemy_two.y == 700) && (enemy_two.x == 1500)){
                //enemy_two.x += 100;
            }
            else{
                enemy_two.x -= 100;
            }

            // Enemy_three (Purple Rock)
            if ((enemy_three.y == 700) && (enemy_three.x == 0)){
                //enemy_three.x -= 100;
            }
            else{
                enemy_three.x -= 100;
            }
        }
        else if (rightKey.justDown && sprite.x != 1500){
            sprite.x += 100;
            // Enemy_one (Brown Rock)
            if ((enemy_one.y == 0) && (enemy_one.x == 1500)){
                //enemy_one.x += 100;
            }
            else{
                enemy_one.x += 100;
            }

            // Enemy_two (Red Rock)
            if ((enemy_two.y == 700) && (enemy_two.x == 1500)){
                //enemy_two.x -= 100;
            }
            else{
                enemy_two.x += 100;
            }

            // Enemy_three (Purple Rock)
            if ((enemy_three.y == 700) && (enemy_three.x == 0)){
                //enemy_three.x -= 100;
            }
            else{
                enemy_three.x += 100;
            }
        }
    }
};
