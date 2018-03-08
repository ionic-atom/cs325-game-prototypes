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

    // each jump, left, and right can do a max of 3
    // before needing to be reset
    var jump_ctr;
    var right_ctr;
    var left_ctr;

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
             //game.add.image(800, 0, 'sky');
             //game.add.image(800, 600, 'sky');
             game.world.setBounds(0, 0, 1600, 3200);
             // Enable p2 physics, collision
             // I played around with the gravity to get the feel of this lose chicken
             // The restituion for falling is a graceful fall
             game.physics.startSystem(Phaser.Physics.P2JS);
             //game.physics.p2.gravity.x = 300;
             game.physics.p2.gravity.y = 500;
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
             // up, left, and right counter
             jump_ctr = 0;
             right_ctr = 0;
             left_ctr = 0;
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
                var floor = game.add.sprite(400 + i, 3175, 'grass');
                game.physics.p2.enable(floor);
                floor.body.static = true;
                floor.body.setMaterial(worldMaterial);
                i += 800;
            }

            var plat_level_1 = game.add.sprite(400, 2800, 'platform');
            game.physics.p2.enable(plat_level_1);
            plat_level_1.body.static = true;
            plat_level_1.body.setMaterial(worldMaterial);

            var plat_level_2 = game.add.sprite(400, 2000, 'platform');
            game.physics.p2.enable(plat_level_2);
            plat_level_2.body.static = true;
            plat_level_2.body.setMaterial(worldMaterial);

            var plat_level_22 = game.add.sprite(1500, 2000, 'platform');
            game.physics.p2.enable(plat_level_22);
            plat_level_22.body.static = true;
            plat_level_22.body.setMaterial(worldMaterial);


            var plat_level_3 = game.add.sprite(800, 1500, 'platform');
            game.physics.p2.enable(plat_level_3);
            plat_level_3.body.static = true;
            plat_level_3.body.setMaterial(worldMaterial);

            var plat_level_4 = game.add.sprite(400, 1000, 'platform');
            game.physics.p2.enable(plat_level_4);
            plat_level_4.body.static = true;
            plat_level_4.body.setMaterial(worldMaterial);

            //var groundPlayerCM = game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, { friction: 0.0 });
            //var groundBoxesCM = game.physics.p2.createContactMaterial(worldMaterial, boxMaterial, { friction: 0.6 });
 
        },
    
        update: function () {
    
            xp = sprite.body.x 
            yp = sprite.body.y
            game.camera.x = xp - 400;
            game.camera.y = yp - 400;
            // damping for left over forces that are being applied to the body
            // even after control has been reliquinsed
            sprite.body.applyDamping(0.25);
            // reset jumps key, thrusts you downward (towards possible danger)
            if (resetKey.justDown){
                sprite.body.setZeroForce();
                sprite.body.moveDown(2500);
                //sprite.body.velocity.x
                jump_ctr = 0;
                left_ctr = 0;
                right_ctr = 0;
            }
            // left movement
            if (leftKey.justDown && (left_ctr < 3)){
                sprite.body.moveLeft(600);
                left_ctr += 1;
            }
            // right movement
            if (rightKey.justDown && (right_ctr < 3)){
                sprite.body.moveRight(600);
                right_ctr += 1;
            }
            // jump key with 3 times before reset can happen
            if (upKey.justDown && (jump_ctr < 3)){
                sprite.animations.play('fly', 20, false);
                sprite.body.moveUp(600);
                jump_ctr += 1;
            }
            // downward movement
            if (downKey.justDown){
                sprite.body.moveDown(600);
            }
        },

        // Text on screen
        render: function () {

            game.debug.text('Jumps Used: 3/'+jump_ctr, 32, 32);
            game.debug.text('Left Movements Used: 3/'+left_ctr, 32, 64);
            game.debug.text('Right Movements Used: 3/'+right_ctr, 32, 96);
        }
    };
};
