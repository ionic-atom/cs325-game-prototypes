"use strict";

var GameStates = {};

GameStates.makeBoot = function( game ) {
    return {
        init: function () {
    
            //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
            game.input.maxPointers = 1;
    
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            game.stage.disableVisibilityChange = true;
    
            if (game.device.desktop)
            {
                //  If you have any desktop specific settings, they can go in here
                game.scale.pageAlignHorizontally = true;
            }
            else
            {
                //  Same goes for mobile settings.
                //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
                game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                game.scale.setMinMax(480, 260, 1024, 768);
                game.scale.forceLandscape = true;
                game.scale.pageAlignHorizontally = true;
            }
    
        },
    
        preload: function () {
    
            //  Here we load the assets required for our Preloader state (in this case a background and a loading bar)
            game.load.spritesheet( 'chicken_fly', 'assets/chicken_fly.png', 40, 40, 10);
            game.load.image( 'sky', 'assets/sky.png');
            game.load.image( 'platform', 'assets/ground.png');
            game.load.image( 'grass', 'assets/grass.png');
            game.load.image( 'spike', 'assets/spikes.png');
            game.load.image( 'half_p', 'assets/half_wood.png');
            game.load.image( 'small_w', 'assets/small_wood.png');
            //game.load.image( 'wood', 'assets/ground.png');
    
        },
    
        create: function () {
            //  By this point the preloader assets have loaded to the cache, we've set the game settings
            //  So now let's start the real preloader going
            game.state.start('Preloader');
    
        }
    };
};
