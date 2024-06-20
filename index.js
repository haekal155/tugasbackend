import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { testConnection } from "./Database/db.js"
import router from "./route/index.js"

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use(router)

app.listen(process.env.APP_PORT, async () => {
    testConnection();
    console.log(`http://localhost:${process.env.APP_PORT}`);
});