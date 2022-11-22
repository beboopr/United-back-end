import dbConnect from "./dbConnect.js";

export function getAllPost(req, res) {
    const db = dbConnect();
    db.collection('posts').get()
    .then(collection => {
        const postsArr = collection.docs.map(doc => {
            return {...doc.data(), postsId: doc.id }
        })
        res.send({success: true, message: postsArr })
    })
    .catch(err => {
        res.status(500).send({ success: false, message: err })
    })
}

export async function createNewPost(req, res) {
    const db = dbConnect();
    const result = await db.collection('posts').add(req.body)
    .catch(err => {
        res.status(500).send({success: false, message: err })
    })
    res.status(201).send({success: true, message: result })
}