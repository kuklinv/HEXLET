export default class Validator {
  constructor() {
    this.checks = [];
  }

  addCheck() {
    this.checks = [fn];
  }

  isValid(data) {
    return this.checks.every((fn) => fn(data));
  }
}
