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
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {

        game.load.spritesheet( 'chicken_fly', 'assets/chicken_fly.png', 40, 40, 10);
        game.load.image( 'sky', 'assets/sky.png');
        //game.load.image( 'wood', 'assets/ground.png');

    }

    // char
    var sprite;

    // platforms
    var plank;

    // input variables
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    var resetKey;

    // Jump ctr ---- Can jump 4 times without collision
    var jump_ctr;

    // animation
    var fly;

    var platforms;
    var ground;


    function create() {

        // adding in sky background
        game.add.image(0, 0, 'sky');
        // Enable p2 physics, collision
        // I played around with the gravity to get the feel of this lose chicken
        // The restituion for falling is a graceful fall
	    game.physics.startSystem(Phaser.Physics.P2JS);
        //game.physics.p2.gravity.x = 300;
        game.physics.p2.gravity.y = 300;
        //  Add a sprite
        sprite = game.add.sprite(200, 200, 'chicken_fly');
        // plank = game.add.sprite(0, 500, 'wood');
        ///game.physics.p2.enable(plank);
        // Enable if for physics. This creates a default rectangular body.
        game.physics.p2.enable(sprite);

        sprite.enableBody = true;
        // sprite.physicsType = Phaser.physics.ARCADE;
        //  Modify a few body properties
        sprite.body.fixedRotation = true;
        // jump count
        jump_ctr = 0;
        // wings flapping animation
        fly = sprite.animations.add('fly');
        //
        //sprite.animations.play('fly', 20, false);
        //
        //game.world.setBounds()
        sprite.body.collideWorldBounds = true;


        // input getters
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
        resetKey = game.input.keyboard.addKey(Phaser.Keyboard.E);

        /*
        platforms = game.add.group();
        platforms.enableBody = true;
        ground = platforms.create(0, game.world.height - 64, 'wood');
        game.physics.p2.enable(ground);
        */

    }

    function update() {
        
        // damping for left over forces that are being applied to the body
        // even after control has been reliquinsed
        sprite.body.applyDamping(0.25);
        // reset jumps key, thrusts you downward (towards possible danger)
        if (resetKey.justDown){
            sprite.body.setZeroForce();
            sprite.body.moveDown(2500);
            //sprite.body.velocity.x
            jump_ctr = 0;
        }
        // left movement
        if (leftKey.justDown){
            sprite.body.moveLeft(600);
        }
        // right movement
        if (rightKey.justDown){
            sprite.body.moveRight(600);
        }
        // jump key with 4 times before reset can happen
        if (upKey.justDown && (jump_ctr < 4)){
            sprite.animations.play('fly', 20, false);
            sprite.body.moveUp(600);
            jump_ctr += 1;
        }
        // downward movement
        if (downKey.justDown){
            sprite.body.moveDown(600);
        }
    }
};