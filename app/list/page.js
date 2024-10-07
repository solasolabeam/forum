import { connectDB } from "@/util/database";

export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    console.log('result', result)
    return (
        <div className="list-bg">
            {
                result.map((v, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <h4>{v.title}</h4>
                            <p>{v.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
} 