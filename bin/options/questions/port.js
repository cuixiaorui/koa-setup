module.exports = (options) => {
  return {
    type: "input",
    name: "port",
    message: "set server port number",
    default() {
      return options.port;
    },
  };
};
