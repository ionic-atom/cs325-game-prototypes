
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
    //var right_ctr;
    //var left_ctr;

    // animation
    var fly;

    var platforms;
    var ground;
    var win_condition;

    // Platform
    var plat;

    // 
    var yp;
    var xp;

    var kz;
    var playerCG;
    var spikesCG;

    var reset_button;

    var musik
    
    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
        musik.stop();
        //  Then let's go back to the main menu.
        
        game.state.start('MainMenu');

    }
    
    return {
    
        create: function () {

            musik = game.add.audio('titleMusic');
            musik.play();

            game.add.image(0, 0, 'sky');
            game.world.setBounds(0, 0, 1600, 3200);
            game.physics.startSystem(Phaser.Physics.P2JS);
            game.physics.p2.gravity.y = 500;

            //sprite = game.add.sprite(300, 800, 'chicken_fly');
            sprite = game.add.sprite(100, 3130, 'chicken_fly');
            game.physics.p2.enable(sprite);
            sprite.enableBody = true;
            sprite.body.fixedRotation = true;
            jump_ctr = 0;
            //right_ctr = 0;
            //left_ctr = 0;
            fly = sprite.animations.add('fly');
            sprite.body.collideWorldBounds = true;
            upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
            downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
            leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
            rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
            resetKey = game.input.keyboard.addKey(Phaser.Keyboard.E);


            var finish_line0 = game.add.sprite(430, 930, 'small_w');
            game.physics.p2.enable(finish_line0);
            finish_line0.enableBody = true;

            var finish_line1 = game.add.sprite(350, 930, 'small_w');
            game.physics.p2.enable(finish_line1);
            finish_line1.enableBody = true;
            
            var finish_line2 = game.add.sprite(390, 870, 'small_w');
            game.physics.p2.enable(finish_line2);
            finish_line2.enableBody = true;
            
            var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

            game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);
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

            win_condition = 0;

            //timer = game.time.create(false);
            //timer.loop(10000, updateCounter, this);

        },

        updateCounter: function(){         
            win_condition ++;
        },
    
        update: function () {

    
            if (win_condition == 2){
                quitGame();
                //reset_button = game.add.button( 400, 400, 'playButton', startGame, null, 'over', 'out', 'down');
            }

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
                //left_ctr = 0;
                //right_ctr = 0;
            }
            // left movement
            if (leftKey.justDown && (jump_ctr < 3)){
                sprite.body.moveLeft(600);
                jump_ctr += 1;
            }
            // right movement
            if (rightKey.justDown && (jump_ctr < 3)){
                sprite.body.moveRight(600);
                jump_ctr += 1;
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

            game.debug.text('Movements Used: 3/'+jump_ctr, 32, 32, '#FFFF00', "30px Times New Roman");

            //game.debug.text('X: '+sprite.body.x, 32, 128);
            //game.debug.text('Y: '+sprite.body.y, 32, 160);

            if (sprite.body.y < 950){
                if(sprite.body.x < 400){
                    win_condition = 1;
                }
            }
            if (sprite.body.y < 950){
                if(sprite.body.x < 200){
                    win_condition = 2;
                }
            }
            if(win_condition == 1){               
                game.debug.text('You Made It To The Top!', 230, 600, '#FFFF00', "100px Arial");

            }
        }
    };
};
