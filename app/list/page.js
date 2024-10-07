import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    return (
        <div className="list-bg">
            {
                result.map((v, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <h4>{v.title}</h4>
                            <Link href={`/detail/${v._id}`}>링크</Link>
                            <p>{v.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
} 