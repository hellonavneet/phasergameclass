var screenWidth = 1000;
var screenHeight = 600;
var playerHeight = 28;
var playerWidth = 28;

playState = {
    preload: function() {
      game.load.image('starfield', '/assets/starfield.png');
      game.load.image('player', '/assets/player.png');
    },
    create: function() {
      spaceField = game.add.tileSprite(0,0, screenWidth, screenHeight,'starfield');      
      
      //Top Left
      player = game.add.sprite(0, 0, 'player');

      //Top Right
      player = game.add.sprite(screenWidth - playerWidth, 0, 'player');

      //Bottom Left
      player = game.add.sprite(0, screenHeight - playerHeight, 'player');

      //Bottom Right
      player = game.add.sprite(screenWidth - playerWidth, screenHeight - playerHeight, 'player');

      //Center
      player = game.add.sprite((screenWidth/2) - (playerWidth/2), (screenHeight/2) - (playerHeight/2), 'player');
    },
    update: function() {

    }
};

var game = new Phaser.Game(screenWidth, screenHeight, Phaser.Canvas, 'mygame');
game.state.add('mainState', playState);
game.state.start('mainState');

