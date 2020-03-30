export default class Team {
  constructor() {
    this.hero = [];
    this.last = 0;
  }

  add(element) {
    this.hero.push(element);
    this.last++;
  }

  [Symbol.iterator]() {
    const { hero, last } = this;
    let current = 0;
    function* next() {
      for (current = 0; current < last; current++) {
        yield hero[current];
      }
    }
    return next();
  }
}