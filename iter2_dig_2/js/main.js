"use strict";

window.onload = function() {

	//	Create your Phaser game and inject it into the 'game' div.
	//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );

	//	Add the States your game has.
	//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
	
	// An object for shared variables, so that them main menu can show
	// the high score if you want.
	var shared = {
		noStranger : false,
    	treatAnimal : false,
    	treatOther : false,
    	simpleDecision : false,
    	treatProperty : false,
    	academiaEthic : false,
    	electronicTime : false,
    	noViolence : false,
    	workEthic : false,
		scienceValidity : false,
		ans0_bool : false,
		ans1_bool : false,
		ans2_bool : false,
		win_bool : false
	};
	
	game.state.add( 'Boot', GameStates.makeBoot( game ) );
	game.state.add( 'Preloader', GameStates.makePreloader( game ) );
	game.state.add( 'SubMenu', GameStates.makeSubMenu( game, shared ) );
	game.state.add( 'MainMenu', GameStates.makeMainMenu( game, shared ) );
	game.state.add( 'Game', GameStates.makeGame( game, shared ) );
	game.state.add( 'End', GameStates.makeEnd( game, shared ) );

	//	Now start the Boot state.
	game.state.start('Boot');

};
