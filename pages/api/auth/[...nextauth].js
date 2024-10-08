import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23livfUbFjoPdN22oR',
      clientSecret: '0f3fbfda8e628303852cf1bcdd3e575d0d4defcd',
    }),
  ],
  secret : 'qweqwe123'
};
export default NextAuth(authOptions); 