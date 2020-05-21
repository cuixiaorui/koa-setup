module.exports = () => ({
  type: "checkbox",
  message: "Select middleware",
  name: "middleware",
  choices: [
    {
      name: "koaRouter",
    },
    {
      name: "koaStatic",
    },
    {
      name: "koaViews",
    },

    {
      name: "koaBody",
    },
  ],
});
