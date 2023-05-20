import { User } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth, { Session, type NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../utils/prismaClient";

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
				if (!credentials?.username || !credentials.password)
					return null;
				const user: User | null = await prisma.user.findUnique({
					where: { username: credentials.username },
				});
				if (!user)
					throw new Error(JSON.stringify({ type: "Username" }));

				const checkPassword = await compare(
					credentials.password,
					user.password
				);
				if (!checkPassword)
					throw new Error(JSON.stringify({ type: "Password" }));

				return user;
			},
		}),
	],
	callbacks: {
		async session({ session, token }: { session: Session; token: JWT }) {
			session.user = token;
			return session;
		},
		async jwt({ token, trigger, user, session }) {
			if (trigger === "update" && session?.user) {
				// Note, that `session` can be any arbitrary object, remember to validate it!
				user = session.user;
			}
			return { ...token, ...user };
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
