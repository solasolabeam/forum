'use client'

import { useEffect, useState } from "react"

export default function Comment({ _id }) {
    const [comment, setComment] = useState('')

    useEffect(() => {
        fetch('/').then(res=>res.json()).then(data=>{console.log(123)})
    }, [])
    return (
        <div>
            <div>댓글목록보여줄부분</div>
            <input onChange={(e) => { setComment(e.target.value) }} />
            <button onClick={() => {
                fetch('/api/comment/new', {
                    method: 'POST',
                    body: JSON.stringify({ comment: comment, _id, _id })
                })
            }}>댓글전송</button>
        </div>
    )
}