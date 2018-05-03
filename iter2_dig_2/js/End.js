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

            var setting_style = { font: "18px Verdana", fill: "#ffffff", align: "center" };

            if (shared.win == true){
                var score_text = game.add.text( 120, 100, "you win", setting_style );
            }
            else{
                var score_text = game.add.text( 120, 100, "you lose", setting_style );
            }

        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
    };
};