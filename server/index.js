require("dotenv").config();
const express = require("express");
const router = require("./src/routes");
const app = express();
const cors = require("cors");

require("./src/modules/redis");
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/", router);

app.listen(port, () => console.log(`listen on port ${port}`));
