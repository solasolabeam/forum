import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(request) {
    // console.log('request.nextUrl', request.nextUrl)
    // console.log('request.cookies', request.cookies)
    // console.log('request.headers', request.headers.get('user-agent'))
    // NextResponse.next()
    // NextResponse.redirect()
    // NextResponse.rewrite()

    const session = await getToken({ req: request })

    // if(request.nextUrl.pathname === '/list') {
    //     console.log(request.headers.get('sec-ch-ua-platform'))
    //     return NextResponse.next()
    // }
    if (request.nextUrl.pathname.startsWith('/write')) {
        if(session == null) {
            
            // return NextResponse.redirect(new URL('/api/auth/signin'), request.url)
            return NextResponse.redirect('http://localhost:3000/api/auth/signin')
        }
    }

    if (request.nextUrl.pathname.startsWith('/list')) {
        console.log(request.headers.get('sec-ch-ua-platform'))
        return NextResponse.next()
    }
}