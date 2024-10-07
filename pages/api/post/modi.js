import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        if (req.body.title == '') {
            res.status(500).json('빈칸');
        }
        // try {

        // }catch(error) {

        // }
        const client = await connectDB;
        const db = client.db("forum")

            await db.collection('post').updateOne({ _id: new ObjectId(req.body.id) },
        { $set: { title: req.body.title, content: req.body.content } })
        res.status(200).redirect('/list');
    }
}