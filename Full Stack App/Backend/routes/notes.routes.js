import { Router } from "express";
import { NoteModel } from "../models/notes.model.js";

export const notesRouter = Router();

notesRouter.get("/", async(req, res) => {
  //logic to get the notes
  try {
    const notes = await NoteModel.find();
    res.send({
      notes: notes
    })
  } catch (error) {
    res.status(500).send({
      msg : 'something went wrong'
    })
  }
});


notesRouter.post("/create", async (req, res) => {
  const payload = req.body;
  console.log(payload)
  try {
    const new_note = await NoteModel.create(payload);
    res.status(201).send({
      message : "created successfully"
    })
  } catch (error) {
    res.status(500).send({
      msg : 'something went wrong'
    })
  }
  
});

notesRouter.patch("/update/:id",async (req, res) => {
  //logic to update the notes
  const payload = req.body;
  const id  = req.params.id;
  const note = await NoteModel.findOne({_id:id});
  const userID_in_note = note.userId;
  const userId_making_request = payload.userId;
  try {
    if(userID_in_note==userId_making_request){
      await NoteModel.findByIdAndUpdate({_id:id},payload);
      res.send("Updated the note")
    }else{
      res.send({"msg":"you are not authorized"})
    }
  } catch (error) {
    res.status(500).send({
      msg : 'something went wrong'
    })
  }
});

notesRouter.delete("/delete/:id", async(req, res) => {

  const id  = req.params.id;
  const note = await NoteModel.findOne({_id:id});
  const userID_in_note = note.userId;
  const userId_making_request = req.body.userId;
  try {
    if(userID_in_note==userId_making_request){
      await NoteModel.findByIdAndDelete({_id:id});
      res.send("Deleted the note")
    }else{
      res.send({"msg":"you are not authorized"})
    }
  } catch (error) {
    res.status(500).send({
      msg : 'something went wrong'
    })
  }
});

/*
  {
  "title": "Backend",
  "note" : "Today i'm building full Stack",
  "category": "learning",
  "author": "akshansh"
  }

*/