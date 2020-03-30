import Person from '../symbols-iterators.Person';
import Team from '../symbols-generators.Team';

test('Should add Team', () => {
  const team = new Team();
  const bowman = new Person(
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defense: 10,
    },
  );
  team.add(bowman);
  expect(team.hero[0]).toEqual(bowman);
});

test('Should iterate', () => {
  const heroArray = [];
  heroArray.push(new Person({
    name: 'Маг', type: 'Magician', health: 100, level: 2, attack: 20, defense: 15,
  }));
  heroArray.push(new Person({
    name: 'Демон', type: 'Daemon', health: 'Infinity', level: 95, attack: 'Infinity', defense: 90,
  }));
  heroArray.push(new Person({
    name: 'Зомби', type: 'Zombie', health: 70, level: 16, attack: 50, defense: 45,
  }));
  const team = new Team();
  for (const hero of heroArray) {
    team.add(hero);
  }

  let counter = 0;
  for (const hero of team) {
    expect(hero).toEqual(heroArray[counter++]);
  }
});