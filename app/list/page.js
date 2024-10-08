

import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export const dynamic = 'force-dynamic'
export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    result = result.map((a) => {
        a._id = a._id.toString()
        return a
    })
    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    )
} 