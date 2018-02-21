"use strict";

window.onload = function() {

    var game = new Phaser.Game( 800, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render} );
    
    function preload() {
        // Loading images
        game.load.image( 'char', 'assets/char.png' );
        game.load.image( 'block', 'assets/char.png')
    }
    
    var sprite;
    var group;

    // Inventory/Items
    var invent;
    var dirt;
    var grass;
    var glass;

    var text;

    
    function create() {

        game.world.setBounds(0, 0, 2400, 2400);
        /*
        for (var i = 0; i < 50; i++){
            game.physics.enable(game.add.sprite(game.world.randomX, game.world.randomY, 'block'), Phaser.Physics.ARCADE);
        }
        */
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#0072bc';

        sprite = game.add.sprite(50, 50, 'char');
        sprite.anchor.setTo(0.5,0.5);
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.allowRotation = false;

        group = game.add.physicsGroup();

        for (var i = 0; i < 50; i++){
            var c = group.create(game.rnd.between(400, 1000), game.rnd.between(600, 1200), 'block', game.rnd.between(0,12));
        }

        // Inventory, stored as array
        invent = new Array(dirt = 0, grass = 0, glass = 0);

        text = game.add.text(sprite.position.x + 200, sprite.position.y + 200, "Inventory:\n" + "dirt: " + dirt + "\ngrass: " + grass, 
        {font: "65px Arial",
        fill: "#ff0044",
        align: "center"});

    }
    
    function update() {

        // Collision
        if (game.physics.arcade.collide(sprite, group, collisionHandler, processHandler, this))
        {
            console.log('item_recieved');
        }

        sprite.rotation = game.physics.arcade.moveToPointer(sprite, 200, game.input.activePointer, 1400);
        game.camera.x = sprite.body.x - 400;
        game.camera.y = sprite.body.y - 400;

        text.position.x = sprite.body.x - 400;
        text.position.y = sprite.body.y - 400;
    }

    function render() {

        game.debug.spriteInfo(sprite, 32, 32);
    }

    // Collision
    function collisionHandler(player, item) {

        item.kill();
        dirt += 1;
        text.setText("Inventory:\n" + "dirt: " + dirt + "\ngrass: " + grass);
    }
    // Collision
    function processHandler(player, item) {

        return true;
    }
};