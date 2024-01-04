export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      this._sqft = 0;
      this.sqft = sqft;
    } else {
      throw new Error(`Class extending Building must override ${this.evacuationWarningMessage.name}`);
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error(`Class extending Building must override ${this.evacuationWarningMessage.name}`);
  }
}
