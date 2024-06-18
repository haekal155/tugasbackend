import express from "express";
import {
    getNotes,
    addNotes,
    updateNotes,
    deleteNotes,
    
} from "../controller/notes.route.js";
import router from "./index.js";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", addNotes);
router.patch("/notes/:id", updateNotes);
router.delete("/notes/:id", deleteNotes);

export default router;