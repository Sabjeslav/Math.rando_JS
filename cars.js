class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  set volume(newValue) {
    if (typeof newValue !== 'number') throw new TypeError('Parameter have unappropriate type');
    this._volume = newValue;
  }
  get volume() {
    return this._volume;
  }
  set density(newValue) {
    if (typeof newValue !== 'number') throw new TypeError('Parameter have unappropriate type');
    this._density = newValue;
  }
  get density() {
    return this._density;
  }
  get fuelWeight () {
    return this.volume * this.density;
  }
  static isFuel(fuel) {
    return fuel instanceof Fuel;
  }
}

class Auto {
  constructor (model, ownWeight, fuel) {
    this.model = model;
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }

  set model(newValue) {
    if (typeof newValue !== 'string') throw new TypeError('Parameter have unappropriate type');
    this._model = newValue;
  }
  get model() {
    return this._model;
  }

  set ownWeight(newValue) {
    if (typeof newValue !== 'number') throw new TypeError('Parameter have unappropriate type');
    this._ownWeight = newValue;
  }
  get ownWeight() {
    return this._ownWeight;
  }

  set fuel(newValue) {
    if (typeof newValue !== 'object') throw new TypeError('Parameter have unappropriate type');
    this._fuel = newValue;
  }
  get fuel() {
    return this._fuel;
  }

  get fullWeight () {
    return this.ownWeight + this.fuel.fuelWeight;
  }
}

const gasoline = new Fuel (50, 0.9);
const vwPassat = new Auto('Passat', 1200, gasoline);


class Friend {
  /**
   * @param {string} name 
   * @param {number} appleAmount 
   * @param {Friend} friend 
   */
  constructor (name, appleAmount, friend) {
    this.name = name;
    this.appleAmount = appleAmount;
    this.friend = friend;
  }
  countAllApples () {
    return this.appleAmount + this.friend.appleAmount;
  }
}

const f1 = new Friend ('John', 7)
const f2 = new Friend ('Connor', 5, f1)

f1.friend = f2; 