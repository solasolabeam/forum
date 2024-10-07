import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

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
                            <Link href={`/detail/${v._id}`}>
                                <h4>{v.title}</h4>
                            </Link>
                            {/* <DetailLink /> */}
                            <p>1월 1일</p>
                        </div>
                    )
                })
            }
        </div>
    )
} 