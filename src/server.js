import express from "express";
import { engine } from "express-handlebars";
import router from "./routes/router";
import path from "path";
import morgan from "morgan";

const app = express();

//Settings
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);

//Middlewares
app.use(morgan("dev"));
//To express understand json
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);
export default app;
