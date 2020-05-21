module.exports = () => ({
  type: "input",
  name: "packageName",
  message: "set package name",
  validate(value) {
    if (value) {
      return true;
    }
    return "Please enter package name";
  },
});
