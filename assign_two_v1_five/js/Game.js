"use strict";

GameStates.makeGame = function( game, shared ) {

    // char
    var sprite;

    // platforms
    var plank;

    // input variables
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    var resetKey;

    // Jump ctr ---- Can jump 4 times without collision
    var jump_ctr;

    // animation
    var fly;

    var platforms;
    var ground;

    // Platform
    var plat;

    // 
    var yp;
    var xp;
    
    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {
    
             // adding in sky background
             game.add.image(0, 0, 'sky');
             //game.add.image(0, 600, 'sky');
             game.add.image(800, 0, 'sky');
             //game.add.image(800, 600, 'sky');
             game.world.setBounds(0, 0, 1600, 800);
             // Enable p2 physics, collision
             // I played around with the gravity to get the feel of this lose chicken
             // The restituion for falling is a graceful fall
             game.physics.startSystem(Phaser.Physics.P2JS);
             //game.physics.p2.gravity.x = 300;
             game.physics.p2.gravity.y = 300;
             //  Add a sprite
             sprite = game.add.sprite(200, 600, 'chicken_fly');
             // plank = game.add.sprite(0, 500, 'wood');
             ///game.physics.p2.enable(plank);
             // Enable if for physics. This creates a default rectangular body.
             game.physics.p2.enable(sprite);
             sprite.enableBody = true;
             // sprite.physicsType = Phaser.physics.ARCADE;
             //  Modify a few body properties
             sprite.body.fixedRotation = true;
             // jump count
             jump_ctr = 0;
             // wings flapping animation
             fly = sprite.animations.add('fly');
             sprite.body.collideWorldBounds = true;
             // input getters
             upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
             downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
             leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
             rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
             resetKey = game.input.keyboard.addKey(Phaser.Keyboard.E);


            //var spriteMaterial = game.physics.p2.createMaterial('spriteMaterial', sprite.body);
            var worldMaterial = game.physics.p2.createMaterial('worldMaterial');
            //var boxMaterial = game.physics.p2.createMaterial('worldMaterial');

            game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

            //  Floor of map
            var i = 0;
            while (i < 1600)
            {
                var box = game.add.sprite(400 + i, 775, 'platform');
                game.physics.p2.enable(box);
                box.body.static = true;
                box.body.setMaterial(worldMaterial);
                i += 800;
            }
            i = 0;
            while (i < 1600)
            {
                var box = game.add.sprite(400, 375, 'platform');
                game.physics.p2.enable(box);
                box.body.static = true;
                box.body.setMaterial(worldMaterial);
                i += 1600;
            }
            //var groundPlayerCM = game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, { friction: 0.0 });
            //var groundBoxesCM = game.physics.p2.createContactMaterial(worldMaterial, boxMaterial, { friction: 0.6 });
 
        },
    
        update: function () {
    
            //xp = sprite.body.x 
            //yp = sprite.body.y
            //game.camera.x = xp - 400;
            //game.camera.y = yp - 400;
            // damping for left over forces that are being applied to the body
            // even after control has been reliquinsed
            sprite.body.applyDamping(0.25);
            // reset jumps key, thrusts you downward (towards possible danger)
            if (resetKey.justDown){
                sprite.body.setZeroForce();
                sprite.body.moveDown(2500);
                //sprite.body.velocity.x
                jump_ctr = 0;
            }
            // left movement
            if (leftKey.justDown){
                sprite.body.moveLeft(600);
            }
            // right movement
            if (rightKey.justDown){
                sprite.body.moveRight(600);
            }
            // jump key with 4 times before reset can happen
            if (upKey.justDown && (jump_ctr < 4)){
                sprite.animations.play('fly', 20, false);
                sprite.body.moveUp(600);
                jump_ctr += 1;
            }
            // downward movement
            if (downKey.justDown){
                sprite.body.moveDown(600);
            }
        }
    };
};
