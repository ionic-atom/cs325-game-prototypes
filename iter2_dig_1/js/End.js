"use strict";

GameStates.makeEnd = function( game, shared ) {

    // Back to main menu Button
    var endButton = null;
    
    function startMenu(pointer) {

        //	And start the actual game
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {
    
            // Background
            game.add.sprite(0, 0, 'titlePage');

            // To go back to the main menu with the settings applied!
            endButton = game.add.button( 10, 10, 'playButton', startMenu, null, 'over', 'out', 'down');

        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
    };
};