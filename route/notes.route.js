import express from "express";
import {
    addNotes,
    deleteNotes,
    getNotes,
    updateNotes,
} from "../controller/notes.route.js";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", addNotes);
router.patch("/notes/:id", updateNotes);
router.delete("/notes/:id", deleteNotes);

export default router;