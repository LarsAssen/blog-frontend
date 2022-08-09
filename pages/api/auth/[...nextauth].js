import NextAuth from "next-auth";
import Provider from "next-auth/providers/google";

const options = {
  providers: [
    Provider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken
        return session
      }
  },
};

const Auth = (req, res) =>
  NextAuth(req, res, options);

export default Auth;