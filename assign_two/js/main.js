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

        // Load an image and call it 'logo'.
        // game.load.image( 'chicken', 'assets/char.png' );
        game.load.spritesheet( 'chicken', 'assets/spritesheet_idle.png', 100, 100, 48);
        game.load.image( 'sky', 'assets/sky.jpg')

    }
    
    //var char;
    //var upKey;
    //var downKey;
    //var leftKey;
    //var rightKey;
    
    var sprite;
    var cursors;

    // input variables
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;

    function create() {

        game.add.image(0, 0, 'sky');
	    //	Enable p2 physics
	    game.physics.startSystem(Phaser.Physics.P2JS);
        //  Make things a bit more bouncey
        game.physics.p2.gravity.y = 300;
        game.physics.p2.restitution = 0.8;
        //  Add a sprite
	    sprite = game.add.sprite(200, 200, 'chicken');
        //  Enable if for physics. This creates a default rectangular body.
	    game.physics.p2.enable(sprite);
        //  Modify a few body properties
	    sprite.body.setZeroDamping();
        sprite.body.fixedRotation = true;
        
        //text = game.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });

        //cursors = game.input.keyboard.createCursorKeys();

        upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

    }

    function update() {

        //sprite.body.setZeroVelocity();

        if (leftKey.isDown){
            sprite.body.moveLeft(150);
        }
        if (rightKey.isDown){
            sprite.body.moveRight(150);
        }
        if (upKey.isDown){
            sprite.body.moveUp(150);
        }
        if (downKey.isDown){
            sprite.body.moveDown(150);
        }
    }
};