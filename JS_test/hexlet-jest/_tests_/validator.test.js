import getImplementation from "../src/implementations/index.js";

const makeValidator = getImplementation();

// BEGIN (write your solution here)
const validator = makeValidator();
test("simple", () => {
    expect(validator.isValid('some value')).toBe(true);
    validator.addCheck((v) => v > 5);
    expect(validator.isValid(3)).toBe(false);
    expect(validator.isValid(8)).toBe(true);
});
// END
