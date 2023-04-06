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
  }
}

export default Bot;
