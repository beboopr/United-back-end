// import { app } from "firebase-admin";
import { firestore } from "firebase-admin";
import dbConnect from "./dbConnect.js";

//Post Route
export function getAllPost(req, res) {
  const db = dbConnect(); //Connect to Firestore
  db.collection("posts")
    .add(req.body) //Add new item to collection
    .then((doc) =>
      res.status(201).send({ success: true, message: "Added item" })
    )
    .catch((doc) => res.status(501).send({ success: false, message: err }));
}

//Post Route!
export async function createNewPost(req, res) {
  const db = dbConnect();
  const result = await db
    .collection("posts")
    .add(req.body)
    .catch((err) => {
      res.status(500).send({ success: false, message: err });
    });
  res.status(201).send({ success: true, message: result });
}

export async function getOnePost(req,res) {
  const db = dbConnect()
  const { postId } = req.params
  const collection = await db.collection("posts")
  .find({_id: new ObjectBuilder(postId)}).toArray()
  res.send(collection)
}

//Delete Post
export async function deletePost(req, res) {
  const db = dbConnect()
  const collection = await db.collection('posts')
  if(!req.params.appId) {
    res.status(400).send('Invalid request')
  }
  firestore.collection('posts').doc(req.params.appId).delete()
  .then(() => this.getAllPost(req, res))
  .catch(error => res.status(500).send('Error adding Post' + error))
}


// import dbConnect from "./dbConnect.js";
// export function createList(req, res) {
//     const db = dbConnect()  // Connect to Firestore
//     db.collection('toPost').add(req.body)  // Add new item to ToDo Collection
//     // Send back a response (err/not)
//     .then(doc => res.status(201).send({success: true, message: 'Added item'}))
//     .catch(doc => res.status(501).send({success: false, message: err}))
// }