import { Router } from "express";

const notesRouter = Router();

notesRouter.get("/", (req, res) => {
  //logic to get the notes
});


notesRouter.post("/create", async (req, res) => {
  const payload = req.body;
  
});

notesRouter.patch("/update/:noteID", (req, res) => {
  //logic to update the notes
});

notesRouter.delete("/delete/:noteID", (req, res) => {
  //logic to delete the notes
});
