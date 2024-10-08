'use client'

import { useEffect, useState } from "react"

export default function Comment({ _id }) {
    const [comment, setComment] = useState('')
    const [data, setData] = useState('')

    useEffect(() => {
        fetch(`/api/comment/list?id=${_id}`).then(res => res.json()).then(data => { setData(data) })
    }, [])
    return (
        <div>
            <div>댓글목록보여줄부분</div>
            {
                data.length > 0 ?
                data.map((v, i) => {
                    return (
                        <p key={i}>{v.content}</p>
                    )
                })
                : <p>댓글없음</p>
            }
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