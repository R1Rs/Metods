import {Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon} from "../src/add";

test ("test charcter", () => {
// тестирование объекта Character
  let petr = new Character("petr", "Bowman", 25, 25);
  petr.damage(10);
  const received = petr.health;
  const expected = 92.5;

  petr.health = -1;
  petr.damage(10);
  const received1 = petr.health
  const expected1 = -1;

  expect(received).toEqual(expected);
  expect(received1).toEqual(expected1);

// тестирование дочерних объектов
  let bow = new Bowman("Bow");
  const received2 = bow.attack;
  const expected2 = 25;
  expect(received2).toEqual(expected2);

  let mad = new Magician("Mow");
  const received3 = mad.defence;
  const expected3 = 40;
  expect(received3).toEqual(expected3);

  let zp = new Zombie("zp");
  const received4 = zp.type;
  const expected4 = "Zombie";
  expect(received4).toEqual(expected4);

  let dae = new Daemon("Dae");
  const received5 = dae.name;
  const expected5 = "Dae";
  expect(received5).toEqual(expected5);

  let sword = new Swordsman("Man");
  sword.damage(50);
  const received6 = sword.health;
  const expected6 = 70;
  expect(received6).toEqual(expected6);

  let un = new Undead("un");
  un.damage(50);
  const received7 = un.health;
  const expected7 = 62.5;
  expect(received7).toEqual(expected7);
})



