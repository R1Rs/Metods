export {Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon};

class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = attack;
    this.defence = defence;
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

class Bowman extends Character {
   constructor(name) {
     super(name);
     this.type = "Bowman";
     this.attack = 25;
     this.defence = 25;
   }
}

class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = "Swordsman";
    this.attack = 40;
    this.defence = 40;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = "Magician";
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = "Undead";
    this.attack = 25;
    this.defence = 25
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = "Zombie";
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = "Daemon";
    this.attack = 10;
    this.defence = 40;
  }
}


