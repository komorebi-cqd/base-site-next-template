import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    id: "credentials",
    name: "Credentials",
    credentials: {
      username: {
        label: "username",
        type: "text",
        placeholder: "请输入用户名",
      },
      password: {
        label: "password",
        type: "password",
        placeholder: "请输入登陆密码",
      },
    },
    async authorize(credentials) {
      console.log(credentials, "credentials----------------------------");
      if (!credentials?.username || !credentials?.password) {
        throw new Error("Invalid credentials");
      }
      try {
        const res = await fetch(
          "https://cabinapi.test.moonshotsz.com/api/auth/login",
          {
            method: "post",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const { data } = await res.json();
        console.log(data, "user--------");
        return {
          ...data,
          tokenHead: data.tokenHead,
          loginUser: data.loginUser.cbUser,
          token: data.token,
        };
      } catch (error) {
        return null;
      }
    },
  }),
];

export const authOptions: AuthOptions = {
  providers,
  pages: {
    signIn: "/",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60,
  },
  jwt: {
    maxAge: 2 * 60 * 60,
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      // 在登陆时判断是否是自定义登录的方式，并将用户信息保存到next-auth生成的token中，（因为next-auth最终提供的用户信息很少，不能满足需要，因此需要我们自己通过传递设置）
      if (account && account.type === "credentials" && user) {
        token.user = user;
        token.token = user.token;
        token.tokenHead = user.tokenHead;
        token.loginUser = user.loginUser;
      }
      return token;
    },
    async session({ session, token }) {
      // 自定义会话中的user（因为默认的会话中的user信息不能满足我们的需求）
      session.token = token.token;
      session.tokenHead = token.tokenHead;
      session.loginUser = token.loginUser;
      return session;
    },
  },
};

export default NextAuth(authOptions);
