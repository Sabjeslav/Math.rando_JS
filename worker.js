class Worker {
  constructor(name, surname, dayRate, workedDaysAmount) {
    this.name = name;
    this.surname = surname;
    this.dayRate = dayRate;
    this.workedDaysAmount = workedDaysAmount;
  }
  set dayRate(newValue) {
    if (typeof newValue !== 'number') throw new TypeError('Parameter have unappropriate type');
    this._dayRate = newValue;
  }
  get dayRate() {
    return this._dayRate;
  }
  set workedDaysAmount(newValue) {
    if (typeof newValue !== 'number') throw new TypeError('Parameter have unappropriate type');
    this._workedDaysAmount = newValue;
  }
  get workedDaysAmount() {
    return this._workedDaysAmount;
  }
  get salary() {
    return this.dayRate * this.workedDaysAmount;
  }
}


const user = new Worker('name', 'surname', 100, 20);