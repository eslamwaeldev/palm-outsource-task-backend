import bodyParser from "body-parser";
import { log } from "console";
import { config } from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

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

app.listen(port, () => {
  console.log(`Server is running on port: ${port} at http://localhost:${port}`);
});
