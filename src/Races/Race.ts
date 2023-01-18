export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(n: string, dx: number) {
    console.log(`Creating race ${n}`);
    this._name = n;
    this._dexterity = dx;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}