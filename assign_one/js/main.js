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
        game.load.image( 'logo', 'assets/phaser.png' );
    }
    
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

        // Borrowed from Phaser Examples, is identical to code on website -------
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP)
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
        // Adam REMINDER, don't forget to look into
        // addKeys(keys: any): any;
        // for alternate input
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something amazing.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {

        // Original code was sprite.(x)or(y)[--][++] for over time movement.
        // Borrowed from Phaser Examples -------------
        // Used to move the character around in chucks on the screen, for tiled based games.
        if (upKey.isDown){
            sprite.y+10;
        }
        else if (downKey.isDown){
            sprite.y-10;
        }

        if (leftKey.isDown){
            sprite.x+10;
        }
        else if (rightKey.isDown){
            sprite.x-10;
        }
    }
};
