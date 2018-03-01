"use strict";

window.onload = function() {

    var game = new Phaser.Game( 800, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render} );
    
    function preload() {
        // Loading images
        game.load.spritesheet( 'char', 'assets/space_ship.png', 50, 50, 24 );
        game.load.image( 'stars', 'assets/star_frag.png');
        game.load.image( 'background', 'assets/background_space.png');

        // Loading audio
        game.load.audio('thrusters', 'assets/thrusters.ogg');
        game.load.audio('shift', 'assets/shift.mp3');
    }

    // Char
    var sprite;
    // Objects to find
    var toFind;
    // Needs to be 3 to win
    var win;
    // got the object
    //var gotObjectText;

    // timer
    var timer;
    var fail_timer;
    var total;
    var formerTot;

    var background;

    var thruster_sound;
    var shift_sound;

    var f_tot;
    var fail_tot;


    
    function create() {

        background = game.add.tileSprite(0, 0, 2400, 2400, 'background');
        game.world.setBounds(0, 0, 2400, 2400);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.stage.backgroundColor = '#000';
        sprite = game.add.sprite(50, 50, 'char');
        sprite.anchor.setTo(0.5,0.5);
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.allowRotation = false;

        var idle = sprite.animations.add('fly');
        sprite.animations.play('fly', 24, true);

        toFind = game.add.physicsGroup();

        // Hiding sprites over world
        for (var i = 0; i < 17; i++){
            var rX = game.rnd.between(400, 2300);
            var rY = game.rnd.between(400,2300);
            toFind.create(rX, rY, 'stars');
        }

        total = 0;
        formerTot = 0;

        f_tot = 0;
        fail_tot = 0;


        timer = game.time.create(false);
        timer.loop(10000, updateCounter, this);

        timer.start();

        fail_timer = game.time.create(false);
        fail_timer.loop(1000, updateFailCounter, this);

        

        win = 0;

        thruster_sound = game.add.audio('thrusters');
        thruster_sound.loopFull(0.3);
        //thruster_sound.volume = 0.4;
        shift_sound = game.add.audio('shift');
        shift_sound.play();
        shift_sound.volume = 0.1;
    }

    function updateCounter(){
        shift_sound.play();            
        total ++;
    }

    function updateFailCounter(){
        shift_sound.play();
        f_tot++;         
        //total ++;
    }
    
    function update() {

        if (total < 5 && win >= 15){
            timer.stop();
        }

        if (total >= 5){
            timer.stop();
            fail_timer.start();
        }

        if(fail_tot != f_tot){
            fail_tot ++;
            sprite.position.x = game.rnd.between(0, 2400);
            sprite.position.y = game.rnd.between(0, 2400);
        }

        if (formerTot != total){  
            formerTot ++;
            sprite.position.x = game.rnd.between(0, 2400);
            sprite.position.y = game.rnd.between(0, 2400);
        }
        // Collision Object to find

        if (game.physics.arcade.collide(sprite, toFind, collisionHandler, processHandler, this))
        {
            console.log('item_recieved');
        }

        // Sprite controls of following the mouse
        sprite.rotation = game.physics.arcade.moveToPointer(sprite, 200, game.input.activePointer, 1400);
        game.camera.x = sprite.body.x - 400;
        game.camera.y = sprite.body.y - 400;

    }

    function render() {

        game.debug.text('Star Fragments: '+ win +'/15', 32, 32);
        game.debug.text('Current Shift: ' + total, 32, 64);
        if (win < 3){
            game.debug.text('Find 15 Dimensional Stablizers Before Your 5th Shift!', 120, 600, '#DDDDDD');
        }
        
        //game.debug.text('Time Until Character Shift: ' + timer.duration.toFixed(0), 32, 64);

        if (total < 5 && win >= 15){
            game.debug.text('YOU DID IT! YOU ARE STABLE!', 200, 600, '#DDDDDD', "30px Arial");
        }
        if (total == 5){
            game.debug.text('YOU ARE STUCK IN A LOOP...', 200, 600, '#DDDDDD', "30px Arial");
        }
    }

    // Collision
    function collisionHandler(player, item) {

        item.kill();
        win += 1;
    }

    // Collision
    function processHandler(player, item) {

        return true;
    }
};