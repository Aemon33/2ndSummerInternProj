'use server'
import { cookies } from "next/headers"



export async  function handleLogin(userId:string , accessToken:string, refreshToken:string){
    // this is for how long we store the user id in the cookies
        cookies().set('session_userid',userId,{

        httpOnly : true,
        secure:process.env.NODE_ENV ==='production',
        maxAge: 60 * 60 * 24 *7, //one week
        path:'/'
   }
    )
// this is for how long should be active before refresh
    cookies().set('session_access_token',accessToken,{

        httpOnly : true,
        secure:process.env.NODE_ENV ==='production',
        maxAge: 60 * 60, //60 min
        path:'/'
   })
    cookies().set('session_refresh_token',refreshToken,{

        httpOnly : true,
        secure:process.env.NODE_ENV ==='production',
        maxAge: 60 * 60 * 24 *7, //60 min
        path:'/'
   })

}
   export async function resetAuthCookies(){
    console.log('ggg')
    cookies().set('session_userid','')
    cookies().set('session_access_token','')
    cookies().set('session_refresh_token','')
   }


   export async function getUserId(){
    const userId = cookies().get('session_userid')?.value
    return userId ? userId: null
   }




