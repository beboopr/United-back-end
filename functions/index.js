import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPost, createNewPost } from "./src/post.js";
import { ObjectBuilder } from "firebase-functions/v1/storage";

const PORT = 3030;
const app = express();
app.use(express.json());

app.use(cors());
app.post("/posts", createNewPost);
app.get("/posts", getAllPost);

export async function getOnePost(req,res) {
    const db = dbConnect()
    const { postId } = req.params
    const collection = await db.collection("post")
    .find({_id: new ObjectBuilder(postId)}).toArray()
    res.send(collection)
}

// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

export const api = functions.https.onRequest(app)