import express from "express"
import { createtNotes, deletetNotes, editNotes, getAllNotes, getNotes } from "../controllers/noteController.js"

const router = express.Router()

router.get("/", getAllNotes)
router.get("/:id", getNotes)
router.post("/", createtNotes)
router.put("/:id", editNotes)
router.delete("/:id", deletetNotes)

export default router
