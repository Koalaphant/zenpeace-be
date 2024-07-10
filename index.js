const express = require("express");
const app = express();
const cors = require("cors");

const port = 9090;

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on server ${port}`);
});
