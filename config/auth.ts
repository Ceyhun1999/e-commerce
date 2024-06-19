import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
