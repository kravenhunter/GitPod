import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middlewaqre");

  const isAth = false;
  if (!isAth) {
    return NextResponse.redirect(new URL("/log-in", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // matcher: '/about/:path*',
  matcher: "/auth-user",
};
// прописываем middleware для проверки авторизации
// export function middleware(request: NextRequest) {
//   console.log("middleware");

//   const isAth = false;
//   if (!isAth) {
//     return NextResponse.redirect("/");
//   }
//   return NextResponse.next();
// }

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/best-practices", request.url));
// }
// либо можно указать для каких роутов будет срабатывать проверка
// export const config = {
//   // matcher: '/about/:path*',
//   matcher: "/auth-user",
// };
// export const config = {
//   // matcher: ["/dashboard", "/account"]
//   matcher: ["/auth-user"],
// };
