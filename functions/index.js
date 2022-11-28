import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPost, createNewPost, deletePosts } from "./src/posts.js";
// import { ObjectBuilder } from "firebase-functions/v1/storage";

const PORT = 3030;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/posts", getAllPost);
app.post("/posts", createNewPost);
app.delete("/posts/:potsId", deletePosts)



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// export const api = functions.https.onRequest(app)