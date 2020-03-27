import Team from '../symbols-generators.Team';

const team = new Team();
const iterator = team[Symbol.iterator]();

test('Should iterate the Bowman', () => {
  const character = iterator.next();
  expect(character.value).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
    damage: 10,
  });
});

test('Should iterate the Shurikener', () => {
  const character = iterator.next();
  expect(character.value).toEqual({
    name: 'Сюрикенщик',
    type: 'Shurikener',
    health: 100,
    level: 1,
    attack: 5,
    defence: 50,
    damage: 1,
  });
});

test('Should iterate the Swordsman', () => {
  const character = iterator.next();
  expect(character.value).toEqual({
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 10,
    defence: 60,
    damage: 50,
  });
});

test('Should iterate', () => {
  const character = iterator.next();
  expect(character.done).toEqual(true);
});