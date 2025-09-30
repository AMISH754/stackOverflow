import { NextResponse, NextRequest } from 'next/server'
import getOrCreateDB from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
   await Promise.all([
     getOrCreateDB(),
     getOrCreateStorage()
   ]) 
  return NextResponse.next()
}
 
export const config = { // matcher will match the path and middleware will not run there
    //match all  request paths except for the ones starts with:
    //api
    //next/sattic
    //next/image
    //favicon,com
   matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}