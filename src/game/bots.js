class Bot {
  constructor(name, booleanValue, operation, speed, direction, position) {
    this.name = name;
    this.booleanValue = booleanValue;
    this.operation = operation;
    this.speed = speed;
    this.direction = direction;
    this.position = position;
    this.wins = 0;
    this.losses = 0;
    this.ties = 0;
  }

  move() {
    const newPosition = { ...this.position };

    switch (this.direction) {
      case 'UP':
        newPosition.y -= this.speed;
        break;
      case 'DOWN':
        newPosition.y += this.speed;
        break;
      case 'RIGHT':
        newPosition.x += this.speed;
        break;
      case 'LEFT':
        newPosition.x -= this.speed;
        break;
      default:
        break;
    }

    this.position = newPosition;
  }

  changeDirection() {
    // You can implement a more sophisticated logic for changing direction here
    const directions = ['North', 'South', 'East', 'West'];
    this.direction = directions[Math.floor(Math.random() * directions.length)];
  }

  performBooleanOperation(value) {
    switch (this.operation) {
      case 'AND':
        return this.booleanValue & value;
      case 'OR':
        return this.booleanValue | value;
      case 'XOR':
        return this.booleanValue ^ value;
      case 'NOT':
        return this.booleanValue === value ? 0 : 1;
      default:
        return null;
    }
  }

  incrementWins() {
    this.wins++;
  }

  incrementLosses() {
    this.losses++;
  }

  incrementTies() {
    this.ties++;
  }
}

export default Bot;
