import Note from "../models/Note.js"

export async function getAllNotes(req, res){
    try {
        const note = await Note.find();
        res.status(200).json(note);
    } catch (error) {
        console.error("Error on getAllNotes controller", error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export async function getNotes(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (error) {
        console.error("Error on getNotes controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function createtNotes (req, res) {
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});
        const newNote = await note.save()
        res.status(201).json(newNote)
    } catch (error) {
        console.error("Error on createNotes controller", error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export async function editNotes (req, res) {
    try {
        const {title, content} = req.body
        const note = await Note.findByIdAndUpdate(req.params.id,{title,content},{new: true});
        res.status(200).json(note)
    } catch (error) {
        console.error("Error on editNotes controller", error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export async function deletetNotes (req, res) {
    try {
        const delNote = await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Note deleted successfully"})
    } catch (error) {
        console.error("Error on deleteNotes controller", error);
        res.status(500).json({message:"Internal Server Error"})
    }
}