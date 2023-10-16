export { default } from "next-auth/middleware";

export const config = {
  //需要登录的页面路径
  matcher: ["/about"],
};
