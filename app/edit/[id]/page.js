import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/modi" method="POST">
                <input name="id" type="hidden" defaultValue={result._id} />
                <input name="title" placeholder="글제목" defaultValue={result.title} />
                <input name="content" placeholder="글내용" defaultValue={result.content} />
                <button type="submit">전송</button>
            </form>
        </div>
    )
} 