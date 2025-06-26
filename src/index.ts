import bodyParser from "body-parser";
import { log } from "console";
import { config } from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import exerciseRouter from "./routes/exerciseRouter.ts";
import { getError } from "./controllers/error.ts";
import moodRouter from "./routes/moodRouter.ts";

//dotenv init
config();

//Express init
const app = express();

//body parser init
app.use(bodyParser.urlencoded({ extended: false }));

// Init static file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "..", "public")));

const port = process.env.PORT;

//Exercise route handler
app.use("/api/exercise", exerciseRouter);

//Mood Route handler
app.use("/api/mood", moodRouter);

//Error handler
app.use(getError);

app.listen(port, () => {
  log(`Server is running on port: ${port} at http://localhost:${port}`);
});
