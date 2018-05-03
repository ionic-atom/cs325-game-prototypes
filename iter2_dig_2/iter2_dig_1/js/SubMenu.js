"use strict";

GameStates.makeSubMenu = function( game, shared ) {

    // Back to main menu Button
    var menuButton = null;

    // Parent Buttons
    var nS = null;
    var tA = null;
    var tO = null;
    var sD = null;
    var tP = null;
    var aE = null;
    var eT = null;
    var nV = null; 
    var wE = null;
    var sV = null;

    // Text
    var nS_text = null;
    var tA_text = null;
    var tO_text = null;
    var sD_text = null;
    var tP_text = null;
    var aE_text = null;
    var eT_text = null;
    var nV_text = null;
    var wE_text = null;
    var sV_text = null;

    var setting_style = null;

    // Parential Settings
    /*
    var noStranger = false;
    var treatAnimal= false;
    var treatOther = false;
    var simpleDecision = false;
    var treatProperty = false;
    var academiaEthic = false;
    var electronicTime = false;
    var noViolence = false;
    var workEthic = false;
    var scienceValidity = false;
    */
    
    function startMenu(pointer) {

        //	And start the actual game
        game.state.start('MainMenu');

    }

    // Functions to set the settings that the parent wants  
    function setnS() {
        if (shared.noStranger == false){
            shared.noStranger = true;
            nS_text.addColor('#00fe00', 0);
        }
        else {
            shared.noStranger = false;
            nS_text.addColor('#ffffff', 0);
        }
    }
    function settA() {
        if (shared.treatAnimal == false){
            shared.treatAnimal = true;
            tA_text.addColor('#00fe00', 0);
        }
        else {
            shared.treatAnimal = false;
            tA_text.addColor('#ffffff', 0);
        }
    }
    function settO() {
        if (shared.treatOther == false){
            shared.treatOther = true;
            tO_text.addColor('#00fe00', 0);
        }
        else {
            shared.treatOther = false;
            tO_text.addColor('#ffffff', 0);
        }
    }
    function setsD() {
        if (shared.simpleDecision == false){
            shared.simpleDecision = true;
            sD_text.addColor('#00fe00', 0);
        }
        else {
            shared.simpleDecision = false;
            sD_text.addColor('#ffffff', 0);
        }
    }
    function settP() {
        if (shared.treatProperty == false){
            shared.treatProperty = true;
            tP_text.addColor('#00fe00', 0);
        }
        else {
            shared.treatProperty = false;
            tP_text.addColor('#ffffff', 0);
        }
    }
    function setaE() {
        if (shared.academiaEthic == false){
            shared.academiaEthic = true;
            aE_text.addColor('#00fe00', 0);
        }
        else {
            shared.academiaEthic = false;
            aE_text.addColor('#ffffff', 0);
        }
    }
    function seteT() {
        if (shared.electronicTime == false){
            shared.electronicTime = true;
            eT_text.addColor('#00fe00', 0);
        }
        else {
            shared.electronicTime = false;
            eT_text.addColor('#ffffff', 0);
        }
    }
    function setnV() {
        if (shared.noViolence == false){
            shared.noViolence = true;
            nV_text.addColor('#00fe00', 0);
        }
        else {
            shared.noViolence = false;
            nV_text.addColor('#ffffff', 0);
        }
    }
    function setwE() {
        if (shared.workEthic == false){
            shared.workEthic = true;
            wE_text.addColor('#00fe00', 0);
        }
        else {
            shared.workEthic = false;
            wE_text.addColor('#ffffff', 0);
        }
    }
    function setsV() {
        if (shared.scienceValidity == false){
            shared.scienceValidity = true;
            sV_text.addColor('#00fe00', 0);
        }
        else {
            shared.scienceValidity = false;
            sV_text.addColor('#ffffff', 0);
        }
    }
    
    return {
    
        create: function () {
    
            // Background
            game.stage.backgroundColor = '#000000';

            // To go back to the main menu with the settings applied!
            menuButton = game.add.button( 5, 5, 'back_button', startMenu, null, 'no', 'no', 'yes');

            
            nS = game.add.button( 60, 100, 'small_button', setnS, null, 'no', 'no', 'yes');
            tA = game.add.button( 60, 150, 'small_button', settA, null, 'no', 'no', 'yes');
            tO = game.add.button( 60, 200, 'small_button', settO, null, 'no', 'no', 'yes');
            sD = game.add.button( 60, 250, 'small_button', setsD, null, 'no', 'no', 'yes');
            tP = game.add.button( 60, 300, 'small_button', settP, null, 'no', 'no', 'yes');
            aE = game.add.button( 60, 350, 'small_button', setaE, null, 'no', 'no', 'yes');
            eT = game.add.button( 60, 400, 'small_button', seteT, null, 'no', 'no', 'yes');
            nV = game.add.button( 60, 450, 'small_button', setnV, null, 'no', 'no', 'yes');
            wE = game.add.button( 60, 500, 'small_button', setwE, null, 'no', 'no', 'yes');
            sV = game.add.button( 60, 550, 'small_button', setsV, null, 'no', 'no', 'yes');

            setting_style = { font: "18px Verdana", fill: "#ffffff", align: "center" };

            nS_text = game.add.text( 120, 100, "Dealing with Strangers and how to be safer", setting_style );
            tA_text = game.add.text( 120, 150, "How aniamls should be treated", setting_style );
            tO_text = game.add.text( 120, 200, "How others should be treated", setting_style );
            sD_text = game.add.text( 120, 250, "Quick decisions, for example what kind of food do you want?", setting_style );
            tP_text = game.add.text( 120, 300, "How someones property should be treated", setting_style );
            aE_text = game.add.text( 120, 350, "The approach to a good school ethic", setting_style );
            eT_text = game.add.text( 120, 400, "How eletrionics devices should be used", setting_style );
            nV_text = game.add.text( 120, 450, "Violence is not the answer", setting_style );
            wE_text = game.add.text( 120, 500, "Goal acomplishment and sticking with a task", setting_style );
            sV_text = game.add.text( 120, 550, "Scienctific decision making", setting_style );

        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
    };
};