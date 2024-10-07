'use client'

import Link from "next/link"

export default function ListItem({ result }) {
    return (
        <div>
            {
                result.map((v, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${v._id}`}>
                                <h4>{v.title}</h4>
                            </Link>
                            <Link href={`/edit/${v._id}`}>✏️</Link>
                            <span onClick={() => {
                                fetch('/api/test', {
                                    method : 'POST',
                                    body: JSON.stringify([1,2,3])
                                })
                                    .then(() => {
                                        console.log(123123)
                                    })
                            }}>🗑️</span>
                            {/* <DetailLink /> */}
                            <p>1월 1일</p>
                        </div>
                    )
                })
            }
        </div>
    )
}