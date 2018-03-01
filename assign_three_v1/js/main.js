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
    var gotObjectText;

    // timer
    var timer;
    var total;
    var formerTot;

    var background;

    var thruster_sound;
    var shift_sound;


    
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

        gotObjectText = game.add.text(sprite.position.x, sprite.position.y, "Phew! You're Stable", {font: "30px Arial", fill: "#ff0044", align: "center"});
        gotObjectText.alpha = 0.0;

        total = 0;
        formerTot = 0;
        timer = game.time.create(false);
        timer.loop(10000, updateCounter, this);

        timer.start();
        win = 0;

        thruster_sound = game.add.audio('thrusters');
        thruster_sound.loopFull(0.4);
        //thruster_sound.volume = 0.4;
        shift_sound = game.add.audio('shift');
        shift_sound.play();
        shift_sound.volume = 0.3;
    }

    function updateCounter(){
        shift_sound.play();            
        total ++;
    }
    
    function update() {

        if (total < 13 && win == 15){
            gotObjectText.alpha = 1.0;
            timer.stop();
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

        gotObjectText.position.x = sprite.position.x;
        gotObjectText.position.y = sprite.position.y;

        // Sprite controls of following the mouse
        sprite.rotation = game.physics.arcade.moveToPointer(sprite, 200, game.input.activePointer, 1400);
        game.camera.x = sprite.body.x - 400;
        game.camera.y = sprite.body.y - 400;

    }

    function render() {

        game.debug.text('Find 20 Dimensional Stablizers Before Your 12th Shift! ', 32, 32);
        game.debug.text('Time Until Character Shift: ' + timer.duration.toFixed(0), 32, 64);
        game.debug.text('Current Shift: ' + total, 32, 96);
        game.debug.text('Star Fragments: '+ win +'/15', 32, 128);
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