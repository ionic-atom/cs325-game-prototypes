"use strict";

GameStates.makeMainMenu = function( game, shared ) {

	var music = null;
    var playButton = null;
    var psetButton = null;
    
    function startGame(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        //music.stop();

        //	And start the actual game
        game.state.start('Game');

    }

    function startSub(pointer) {

        //music.stop();

        game.state.start('SubMenu');

    }
    
    return {
    
        create: function () {
    
            //	We've already preloaded our assets, so let's kick right into the Main Menu itself.
            //	Here all we're doing is playing some music and adding a picture and button
            //	Naturally I expect you to do something significantly better :)
    
            //music = game.add.audio('titleMusic');
            //music.play();
    
            game.stage.backgroundColor = '#000000'
    
            playButton = game.add.button( 303, 250, 'begin_button', startGame, null, 'no', 'no', 'yes');
            psetButton = game.add.button( 303, 400, 'setup_button', startSub, null, 'no', 'no', 'yes');
        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
        
    };
};