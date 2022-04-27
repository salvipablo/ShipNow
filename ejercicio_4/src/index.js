const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

// Settings.
app.set("port", process.env.PORT || PORT);
//app.set("json spaces", 2):

// Middlewares.
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes.
app.use(require("./routes/index"));
app.use("/api/urls", require("./routes/urls"));

// Starting the server.
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${PORT}`);
});