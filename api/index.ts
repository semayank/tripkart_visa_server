const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Brother"));
const PORT=8000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

module.exports = app;