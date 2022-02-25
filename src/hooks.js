// import * as cookie from "cookie";
//
//
// export const handle = async ({event, resolve}) => {
//     const cookies = cookie.parse(event.request.headers.cookie || "")
//
//     console.log(cookies)
//     console.log(event.locals)
//
//     const response = await resolve(event)
//
//     return response
//
// }
//
// export const getSession = (request) => {
//    const user = request.locals.user
//     return user
//
//    }
