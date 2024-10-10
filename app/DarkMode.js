'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DarkMode() {
    const [mode, setMode] = useState('🌙')
    let router = useRouter()
    useEffect(() => {
        let 쿠키값 = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
        if (쿠키값 == '') {
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }

        if (쿠키값 == 'dark') {
            setMode('🌙')
        } else {
            setMode('☀️')
        }
    }, [])
    return (
        <span onClick={() => {
            let 쿠키값 = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
            if (쿠키값 == 'light') {
                document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
                setMode('🌙')
                router.refresh()
            } else {
                document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
                setMode('☀️')
                router.refresh()
            }

        }}> {mode} </span>
    )
} 