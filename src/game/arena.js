import Bot from './bots';

class Arena {
  constructor(width, height, bots) {
    this.width = width;
    this.height = height;
    this.bots = bots;
  }

  getBots() {
    return this.bots;
  }
  updateBotPosition(bot) {
    // Update bot position based on its speed and direction
    bot.move();

    // Check for collisions with the arena's boundaries
    if (bot.position.x < 0 || bot.position.x >= this.width) {
      bot.changeDirection();
    }
    if (bot.position.y < 0 || bot.position.y >= this.height) {
      bot.changeDirection();
    }
  }

  checkCollisions() {
    for (let i = 0; i < this.bots.length; i++) {
      for (let j = i + 1; j < this.bots.length; j++) {
        const bot1 = this.bots[i];
        const bot2 = this.bots[j];

        if (bot1.position.x === bot2.position.x && bot1.position.y === bot2.position.y) {
          // Bots collided
          const result1 = bot1.performBooleanOperation(bot2.value);
          const result2 = bot2.performBooleanOperation(bot1.value);

          if (result1 !== bot1.value) {
            // Bot 1 lost
            bot1.incrementLosses();
          }
          if (result2 !== bot2.value) {
            // Bot 2 lost
            bot2.incrementLosses();
          }
          if (result1 === bot1.value && result2 === bot2.value) {
            // It's a tie
            bot1.incrementTies();
            bot2.incrementTies();
          }
        }
      }
    }
  }

  update() {
    console.log('Updating arena...');
    console.log(this.bots);
    // Update bot positions
    for (const bot of this.bots) {
      this.updateBotPosition(bot);
    }

    // Check for collisions between bots
    this.checkCollisions();
  }
}

export default Arena;
