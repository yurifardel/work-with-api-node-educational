const express = require("express");
const routes = require("../router/routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log("express server listen in 8080 port");
});
