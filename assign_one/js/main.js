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
        // Load an image and call it 'logo'.
        game.load.image( 'char', 'assets/char_dig_one.png' );
        game.load.image( 'background', 'assets/background_handmade.png')
    }

    var sprite;
    var background

    var upKey;
    var downKey;
    var leftKey;
    var rightKey;

    function create() {

        // background
        background = game.add.tileSprite(0, 0, 1600, 800, 'background');
        // character
        sprite = game.add.sprite(0, 0, 'char');

        sprite.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( sprite, Phaser.Physics.ARCADE );

        sprite.body.collideWorldBounds = true;

        //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function

        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    }

    function update() {

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




    /*
    var bouncy;
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        bouncy.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        bouncy.body.collideWorldBounds = true;
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something amazing.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, game.input.activePointer, 500, 500, 500 );
    }
    */

    /*
    var char_rouge;

    var upKey;
    var downKey;
    var leftKey;
    var rightKey
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        char_rouge = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        char_rouge.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        char_rouge.body.collideWorldBounds = true;

        // Borrowed from Phaser Examples, is identical to code on website -------
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.W)
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.S)
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A)
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D)
        // Adam REMINDER, don't forget to look into
        // addKeys(keys: any): any;
        // for alternate input
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something amazing.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    */
    
    /*
    function update() {

        // Original code was sprite.(x)or(y)[--][++] for over time movement.
        // Borrowed from Phaser Examples -------------
        // Used to move the character around in chucks on the screen, for tiled based games.
        if (upKey.isDown){
            char_rouge.y+10;
        }
        else if (downKey.isDown){
            char_rouge.y-10;
        }

        if (leftKey.isDown){
            char_rouge.x+10;
        }
        else if (rightKey.isDown){
            char_rouge.x-10;
        }
    }
    */
};
