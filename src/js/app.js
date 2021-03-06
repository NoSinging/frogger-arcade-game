// Enemies our player must avoid
var Enemy = function(row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.resetPosition();
    this.row = row;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 500) {
        this.resetPosition();
    };

    this.x = this.x + this.velocity * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.row*83-10);
};

// Rest the enemy x position and velocity
Enemy.prototype.resetPosition = function() {
    this.x = -300 * Math.random();
    this.velocity = 150 * Math.random() + 100;
};

Enemy.prototype.getPosition = function() {
    return [Math.floor(this.x/101), this.row];
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.resetPosition();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.getPosition = function() {
    return [this.col, this.row];
};

// Rest the player x position and velocity
Player.prototype.resetPosition = function() {
    this.col = 2;
    this.row = 5;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.col*101, this.row*83-10)
};

Player.prototype.handleInput = function(action) {
    if (action == 'up' && this.row >0) {
        this.row--;
    } else if (action == 'down' && this.row <5) {
        this.row++;
    } else if (action == 'right' && this.col <4) {
        this.col++;
    } else if (action == 'left' && this.col >0) {
        this.col--;
    } 
    //To Do restrict motion to the canvass
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [
    new Enemy(1), new Enemy(1),
    new Enemy(2), new Enemy(2),
    new Enemy(3), new Enemy(3)
    ];

player = new Player;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
