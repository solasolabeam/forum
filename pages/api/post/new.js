import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)

    if(session) {
        req.body.author = session.user.email
    }
    if (req.method == 'POST') {
        if (req.body.title == '') {
            res.status(500).json('빈칸');
        }
        // try {

        // }catch(error) {

        // }
        const client = await connectDB;
        const db = client.db("forum")
        let result = await db.collection('post').insertOne(req.body)
        res.status(200).redirect('/list');
    }
}