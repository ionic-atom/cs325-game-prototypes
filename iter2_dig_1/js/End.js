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
        

            // To go back to the main menu with the settings applied!
            endButton = game.add.button( 300, 250, 'quit_button', startMenu, null, 'no', 'no', 'yes');

        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
    };
};