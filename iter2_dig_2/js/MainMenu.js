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

            var graphics0 = game.add.graphics(0, 0);
            graphics0.lineStyle(2, 0x0000ff, 1);
            graphics0.drawRect(250, 45, 500, 350);

            var graphics1 = game.add.graphics(0, 0);
            graphics1.lineStyle(2, 0xff0000, 1);
            graphics1.drawRect(150, 35, 612, 450);

            var graphics2 = game.add.graphics(0, 0);
            graphics2.lineStyle(2, 0xffff00, 1);
            graphics2.drawRect(50, 25, 722, 550);
    
            game.stage.backgroundColor = '#000000'
    
            playButton = game.add.button( 400, 100, 'begin_button', startGame, null, 'no', 'no', 'yes');
            psetButton = game.add.button( 400, 250, 'setup_button', startSub, null, 'no', 'no', 'yes');
        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
        
    };
};