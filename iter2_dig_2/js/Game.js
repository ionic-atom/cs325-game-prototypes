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

    var score;

    
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
        [ 'You see someone hurting their pet, should you tell an adult?' ],
        [ 'How should you treat wildlife' ],
        [ 'Should you hunt if you do not actually eat the food' ]
    ];
    var tA_answers = [
        [ 'I am too hurt by seeing it to talk about it', 'No I do not like animals, I do not care', 'Yes I love aniamls, I want them to be stopped' ],
        [ 'With respect', 'Terrorize them', '-'],
        [ 'Of course, I like the hunt', 'No that would be wasteful in taking a life', 'I eat what I kill' ]
    ];
    var tA_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // TO ===========================================
    var tO_questions = [
        [ 'Someone is mean to you, what do you do?' ],
        [ 'If you see bullying should you stick up for them?' ],
        [ 'Why is yelling never the answer?' ]
    ];
    var tO_answers = [
        [ 'Be mean to them', 'Just ignore them, even if they made you sad', 'Tell an adult, if you feel uncomfortable' ],
        [ 'Yes', 'No', '-'],
        [ 'Conflict does not get resolved with yelling', 'Conflict grows with yelling', 'This question is bad, yelling is the answer' ]
    ];
    var tO_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // SD ===========================================
    var sD_questions = [
        [ 'Out of the three which would you choose to eat?' ],
        [ 'Should you steal?' ],
        [ 'What is better, how people see you or how you see yourself' ]
    ];
    var sD_answers = [
        [ 'Italian', 'Chinese', 'Ice Cream' ],
        [ 'Yes', 'No', '-'],
        [ 'How people see me', 'How I see myself', '-' ]
    ];
    var sD_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // TP ===========================================
    var tP_questions = [
        [ 'You see something you want in a neighbors yard, should you take it?' ],
        [ 'You have broken something, do you replace it or try to get away with it' ],
        [ 'A friend lends you something, how do you treat it?' ]
    ];
    var tP_answers = [
        [ 'I will ask them if I can have it', 'Of course I will take it', 'They are mean, time to teach them a lesson' ],
        [ 'Replace', 'Do not say anything, they will not be the wiser', '-'],
        [ 'With the most care', 'I treat it like it did not matter to me', 'I lend it to my other friend' ]
    ];
    var tP_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // AE ===========================================
    var aE_questions = [
        [ 'If you have a chance to cheat on a test, is it the right thing to do?' ],
        [ 'Should you do your homework or play first?' ],
        [ 'The teacher acts you to knock it off, what do you do?' ]
    ];
    var aE_answers = [
        [ 'Sure, I will not get caught', 'No, I will do my own work and get my deserved grade', 'I just want to check my answers...' ],
        [ 'Play', 'Homework', 'I will do neither!'],
        [ 'Keep doing what I am doing, I am funny!', 'Stop and appolgize', 'Be even worse' ]
    ];
    var aE_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // ET ===========================================
    var eT_questions = [
        [ 'Should you bully people over the internet?' ],
        [ 'Electronic Treatment: They are just electronics and can be replaced easily.' ],
        [ 'I should try and scam people over the internet to giving me money.' ]
    ];
    var eT_answers = [
        [ 'Sure, they are just a username', 'Yes, they we\'re being mean', 'No, there is a person behind there' ],
        [ 'True', 'False', '-'],
        [ 'False', 'True', '-' ]
    ];
    var eT_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // NV ===========================================
    var nV_questions = [
        [ 'Does violence solve problems?' ],
        [ 'If you are being attacked should you fight back?' ],
        [ 'You should try to reason with your words, not your fists.' ]
    ];
    var nV_answers = [
        [ 'Absoutely', 'No', 'Sometimes' ],
        [ 'Yes', 'No', 'probably'],
        [ 'False', 'True', '-' ]
    ];
    var nV_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // wE ===========================================
    var wE_questions = [
        [ 'You are asked to help with chores, what do you do?' ],
        [ 'You can take someone elses work for your own.' ],
        [ 'You should always try your best in all situations.' ]
    ];
    var wE_answers = [
        [ 'Just do not do them, I hate chores', 'Do the chores asked of you', 'Tell your siblings to do them' ],
        [ 'True', 'False', '-'],
        [ 'No', 'Yes', '-' ]
    ];
    var wE_points = [
        [ '-' ],
        [ '-' ],
        [ '-' ]
    ]
    // ==============================================

    // SV ===========================================
    var sV_questions = [
        [ 'Can a fact be proven wrong?' ],
        [ 'Should you trust science?' ],
        [ 'Is an opinion a fact?' ]
    ];
    var sV_answers = [
        [ 'Yes', 'No', '-' ],
        [ 'No', 'Yes', '-'],
        [ 'Absoutely', 'My opinions are face.', 'No' ]
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

    function answer1() {

        if (shared.ans0_bool == false){
            shared.ans0_bool = true;

            if(1 == nS_points[0]){
                score+= 1;
            }

            // while this on, others off
            a0_text.addColor('#00fe00', 0);
        }
        else {
            shared.ans0_bool = false;
            a0_text.addColor('#ffffff', 0);
        }
    }

    function answer2() {
        if (shared.ans1_bool == false){
            shared.ans1_bool = true;

            if(2 == nS_points[0]){
                score+= 1;
            }

            // while this on, others off
            a1_text.addColor('#00fe00', 0);
        }
        else {
            shared.ans1_bool = false;
            a1_text.addColor('#ffffff', 0);
        }
    }

    function answer3() {
        if (shared.ans2_bool == false){
            shared.ans2_bool = true;

            if(3 == nS_points[0]){
                score+= 1;
            }

            // while this on, others off
            a2_text.addColor('#00fe00', 0);
        }
        else {
            shared.ans2_bool = false;
            a2_text.addColor('#ffffff', 0);
        }
    }

    function reset_text(){
        a0_text.addColor('#ffffff', 0);
        a1_text.addColor('#ffffff', 0);
        a2_text.addColor('#ffffff', 0);
    }
    function reset_bools(){
        shared.ans0_bool = false;
        shared.ans1_bool = false;
        shared.ans2_bool = false;
    }

    function updateText() {
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
                                                if (score == 1) {
                                                    shared.win_bool = true;
                                                }
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

            var graphics1 = game.add.graphics(0, 0);
            graphics1.lineStyle(2, 0x0000FF, 1);
            graphics1.drawRect(50, 225, 700, 225);


            // Add some text using a CSS style.
            // Center it in X, and position its top 15 pixels from the top of the world.
            style = { font: "18px Verdana", fill: "#9999ff", align: "center" };
            text = game.add.text( game.world.centerX, 145, "You will have 10 seconds per question, answer correctly to win", style );
            text.anchor.setTo( 0.5, 0.0 );

            ans0 = game.add.button( 100, 250, 'small_button', answer1, null, 'no', 'no', 'yes');
            ans1 = game.add.button( 100, 325, 'small_button', answer2, null, 'no', 'no', 'yes');
            ans2 = game.add.button( 100, 400, 'small_button', answer3, null, 'no', 'no', 'yes');

            a0_text = game.add.text( 200, 250, "answer", { font: "18px Verdana", fill: "#ffffff", align: "left" });
            a1_text = game.add.text( 200, 325, "answer", { font: "18px Verdana", fill: "#ffffff", align: "left" } );
            a2_text = game.add.text( 200, 400, "answer", { font: "18px Verdana", fill: "#ffffff", align: "left" } );

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

            score = 0;
            //checkDB();

        },
    
        update: function () {

            if (last_total < total){
                
                updateText();
                reset_bools();
                reset_text();

                inside_array++;
                if (inside_array == 3){
                    inside_array = 0;
                }

                last_total++;
            }       
        }
    };
};
