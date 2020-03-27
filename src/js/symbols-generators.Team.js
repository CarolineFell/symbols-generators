export default class Team {
  constructor() {
    this.hero = [
      {
        name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10, damage: 10,
      },
      {
        name: 'Сюрикенщик', type: 'Shurikener', health: 100, level: 1, attack: 5, defence: 50, damage: 1,
      },
      {
        name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 10, defence: 60, damage: 50,
      },
    ];
  }

  [Symbol.iterator]() {
    const sorted = (a, b) => {
      const healthA = a.health + a.defence;
      const healthB = b.health + b.defence;
      const attackA = a.attack + a.damage;
      const attackB = b.attack + b.damage;

      if (healthA === healthB) {
        return attackB - attackA;
      }

      return healthA - healthB;
    };

    const hero = this.hero.sort(sorted);
    let current = 0;
    const last = hero.length;
    return {
      next() {
        if (current < last) {
          const val = hero[current];
          current += 1;
          return {
            done: false,
            value: val,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}