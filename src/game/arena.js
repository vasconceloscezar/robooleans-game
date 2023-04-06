import Bot from './bot';

class Arena {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.bots = [];
  }

  addBot(bot) {
    if (bot instanceof Bot) {
      this.bots.push(bot);
    }
  }

  update() {
    // Implement logic for updating bot positions, checking for collisions,
    // and updating scores based on the game rules
  }
}

export default Arena;
