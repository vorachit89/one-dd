import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    
  ],
  
  callbacks: {
    redirect: async (url, baseUrl) => {
      return ('http://localhost:3000/home')
    },
  }
});
    
export { handler as GET, handler as POST };
