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

    var outside_array;
    var inside_array;

    var s0;
    var s1;
    var s2;
    var s3;
    var s4;
    var s5;
    var s6;
    var s7;
    var s8;
    var s9;

    var ans0;
    var ans1;
    var ans2;

    var a0_text;
    var a1_text;
    var a2_text;


    
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

    var ns = [nS_questions, nS_answers, nS_points];
    // ==============================================


    // TA ===========================================
    var tA_questions = [
        [ 'animal treatment q0' ],
        [ 'animal treatment q1' ],
        [ 'animal treatment q2' ]
    ];
    var tA_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var tA_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // TO ===========================================
    var tO_questions = [
        [ 'treatment of others q0' ],
        [ 'treatment of others q1' ],
        [ 'treatment of others q2' ]
    ];
    var tO_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var tO_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // SD ===========================================
    var sD_questions = [
        [ 'simple decision q0' ],
        [ 'simple decision q1' ],
        [ 'simple decision q2' ]
    ];
    var sD_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var sD_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // TP ===========================================
    var tP_questions = [
        [ 'property treatment q0' ],
        [ 'property treatment q1' ],
        [ 'property treatment q2' ]
    ];
    var tP_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var tP_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // AE ===========================================
    var aE_questions = [
        [ 'school enviroment q0' ],
        [ 'school enviroment q1' ],
        [ 'school enviroment q2' ]
    ];
    var aE_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var aE_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // ET ===========================================
    var eT_questions = [
        [ 'responsability of electronics q0' ],
        [ 'responsability of electronics q1' ],
        [ 'responsability of electronics q2' ]
    ];
    var eT_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var eT_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // NV ===========================================
    var nV_questions = [
        [ 'violence q0' ],
        [ 'violence q1' ],
        [ 'violence q2' ]
    ];
    var nV_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var nV_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // wE ===========================================
    var wE_questions = [
        [ 'work ethic q0' ],
        [ 'work ethic q1' ],
        [ 'work ethic q2' ]
    ];
    var wE_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var wE_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // SV ===========================================
    var sV_questions = [
        [ 'science q0' ],
        [ 'science q1' ],
        [ 'science q2' ]
    ];
    var sV_answers = [
        [ '-', '-', '-' ],
        [ '-', '-', '-'],
        [ '-', '-', '-' ]
    ];
    var sV_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }

    function updateCounter() {
        total++;
    }

    function answer() {

    }

    function updateText() {
        //if (shared.noStranger == true){
        if (shared.noStranger == true && s0 < 3) {
            text.setText(nS_questions[inside_array]);
            a0_text.setText(nS_answers[inside_array][0]);
            a1_text.setText(nS_answers[inside_array][1]);
            a2_text.setText(nS_answers[inside_array][2]);
            s0 ++;

        }
        else{

            if (shared.treatAnimal == true && s1 < 3) {
                text.setText(tA_questions[inside_array]);
                a0_text.setText(tA_answers[inside_array][0]);
                a1_text.setText(tA_answers[inside_array][1]);
                a2_text.setText(tA_answers[inside_array][2]);
                s1 ++;
            }
            else{

                if (shared.treatOther == true && s2 < 3) {
                    text.setText(tO_questions[inside_array]);
                    a0_text.setText(tO_answers[inside_array][0]);
                    a1_text.setText(tO_answers[inside_array][1]);
                    a2_text.setText(tO_answers[inside_array][2]);
                    s2 ++;
                }
                else{

                    if (shared.simpleDecision == true && s3 < 3) {
                        text.setText(sD_questions[inside_array]);
                        a0_text.setText(sD_answers[inside_array][0]);
                        a1_text.setText(sD_answers[inside_array][1]);
                        a2_text.setText(sD_answers[inside_array][2]);
                        s3 ++;
                    }
                    else{

                        if (shared.treatProperty == true && s4 < 3) {
                            text.setText(tP_questions[inside_array]);
                            a0_text.setText(tP_answers[inside_array][0]);
                            a1_text.setText(tP_answers[inside_array][1]);
                            a2_text.setText(tP_answers[inside_array][2]);
                            s4 ++;
                        }
                        else{

                            if (shared.academiaEthic == true && s5 < 3) {
                                text.setText(aE_questions[inside_array]);
                                a0_text.setText(aE_answers[inside_array][0]);
                                a1_text.setText(aE_answers[inside_array][1]);
                                a2_text.setText(aE_answers[inside_array][2]);
                                s5 ++;
                            }
                            else{

                                if (shared.electronicTime == true && s6 < 3) {
                                    text.setText(eT_questions[inside_array]);
                                    a0_text.setText(eT_answers[inside_array][0]);
                                    a1_text.setText(eT_answers[inside_array][1]);
                                    a2_text.setText(eT_answers[inside_array][2]);
                                    s6 ++;
                                }
                                else{

                                    if (shared.noViolence == true && s7 < 3) {
                                        text.setText(nV_questions[inside_array]);
                                        a0_text.setText(nV_answers[inside_array][0]);
                                        a1_text.setText(nV_answers[inside_array][1]);
                                        a2_text.setText(nV_answers[inside_array][2]);
                                        s7 ++;
                                    }
                                    else{

                                        if (shared.workEthic == true && s8 < 3) {
                                            text.setText(wE_questions[inside_array]);
                                            a0_text.setText(wE_answers[inside_array][0]);
                                            a1_text.setText(wE_answers[inside_array][1]);
                                            a2_text.setText(wE_answers[inside_array][2]);
                                            s8 ++;
                                        }
                                        else{

                                            if (shared.scienceValidity == true && s9 < 3) {
                                                text.setText(sV_questions[inside_array]);
                                                a0_text.setText(sV_answers[inside_array][0]);
                                                a1_text.setText(sV_answers[inside_array][1]);
                                                a2_text.setText(sV_answers[inside_array][2]);
                                                s9 ++;
                                            }
                                            else{
                                                game.state.start('End');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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
            text = game.add.text( game.world.centerX, 145, "You will have 10 seconds per question, answer correctly to win", style );
            text.anchor.setTo( 0.5, 0.0 );

            ans0 = game.add.button( 100, 250, 'small_button', answer, null, 'no', 'no', 'yes');
            ans1 = game.add.button( 100, 325, 'small_button', answer, null, 'no', 'no', 'yes');
            ans2 = game.add.button( 100, 400, 'small_button', answer, null, 'no', 'no', 'yes');

            a0_text = game.add.text( 200, 250, "answer", { font: "18px Verdana", fill: "#9999ff", align: "left" });
            a1_text = game.add.text( 200, 325, "answer", { font: "18px Verdana", fill: "#9999ff", align: "left" } );
            a2_text = game.add.text( 200, 400, "answer", { font: "18px Verdana", fill: "#9999ff", align: "left" } );

            var correct = 0;

            timer = 0;
            total = 0;
            last_total = 0;

            timer = game.time.create(true);
            timer.loop(10000, updateCounter, this);
            timer.start();

            // outside array < 3 (first in every category)
            inside_array = 0;

            s0 = 0;
            s1 = 0;
            s2 = 0;
            s3 = 0;
            s4 = 0;
            s5 = 0;
            s6 = 0;
            s7 = 0;
            s8 = 0;
            s9 = 0;

            //checkDB();

        },
    
        update: function () {

            if (last_total < total){
                updateText();

                inside_array++;
                if (inside_array == 3){
                    inside_array = 0;
                }

                last_total++;
            }

        }
    };
};
