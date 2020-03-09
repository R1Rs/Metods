export {Character, Bowman};

class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.level = 1;
    this.health = 100;
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.level ++;
      this.attack = this.attack / 100 * 120;
      this.defence = this.defence / 100 * 120;
      this.health = 100;
    } else {
      throw Error("нельзя повысить уровень умершего");
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
