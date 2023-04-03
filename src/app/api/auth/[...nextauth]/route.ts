import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth, { Session, type NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "CredentialsProvider",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) return null;
        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });
        if (!user) return null;

        const checkPassword = await compare(
          credentials.password,
          user.password
        );
        if (!checkPassword) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token;
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
