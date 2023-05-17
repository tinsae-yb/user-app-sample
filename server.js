const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/user", (req, res) => res.send("Hello User!"));
app.get("/user/fromshop", (req, res) => {
  axios.get("http://shop:3000/shop/shopid123}}");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
