"use strict";

GameStates.makeGame = function( game, shared ) {

    // Vars
    var quitButton;
    var graphics;
    var style;
    var text;

    var timer;
    var total;
    var last_total;

    // NS ===========================================
    var nS_questions = [
        [ 'What should you do if a stranger askes you to go somewhere with them?' ],
        [ 'Do you tell an adult if someone tries to get you to go somewhere?' ],
        [ 'How can you be more safe in public when your guardian is not around?' ]
    ];
    var nS_answers = [
        [ 'Run, scream, and kick if needed', 'Go with them', 'Keep talking with them' ],
        [ 'Maybe', 'No', 'Yes'],
        [ 'Do not look at your surroundings', 'Be with a ground of friends', 'Talk with strangers' ]
    ];
    var nS_points = [
        [ '1' ],
        [ '3' ],
        [ '2' ]
    ];
    // ==============================================

    /*
    // TA ===========================================
    var tA_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var tA_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var tA_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // TO ===========================================
    var tO_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var tO_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var tO_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // SD ===========================================
    var sD_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var sD_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var sD_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // TP ===========================================
    var tP_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var tP_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var tP_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // AE ===========================================
    var aE_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var aE_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var aE_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // ET ===========================================
    var eT_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var eT_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var eT_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // NV ===========================================
    var nV_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var nV_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var nV_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // wE ===========================================
    var wE_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var wE_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var wE_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================

    // SV ===========================================
    var sV_questions = [
        [ '' ],
        [ '' ],
        [ '' ]
    ];
    var sV_answers = [
        [ '', '', '' ],
        [ '', '', ''],
        [ '', '', '' ]
    ];
    var sV_points = [
        [ '' ],
        [ '' ],
        [ '' ]
    ]
    // ==============================================
    */

    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }

    function updateCounter() {
        total++;
    }

    function updateText() {
        text.setText(nS_questions[1])
    }
    
    return {
    
        create: function () {

            quitButton = game.add.button( 10, 10, 'quit_button', quitGame, null, 'no', 'no', 'yes');
            //var small_yo = game.add.button( 300, 300, 'small_button', quitGame, null, 'no', 'no', 'yes');

            graphics = game.add.graphics(0, 0);
            graphics.lineStyle(2, 0x0000FF, 1);
            graphics.drawRect(50, 105, 700, 100);

            // Add some text using a CSS style.
            // Center it in X, and position its top 15 pixels from the top of the world.
            style = { font: "18px Verdana", fill: "#9999ff", align: "center" };
            text = game.add.text( game.world.centerX, 145, nS_questions[0], style );
            text.anchor.setTo( 0.5, 0.0 );

            timer = 0;
            total = 0;
            last_total = 0;

            timer = game.time.create(true);
            timer.loop(10000, updateCounter, this);
            timer.start();

        },
    
        update: function () {

            if (last_total < total){
                updateText();
                last_total++;
            }
        }
    };
};
