"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function SignInPage() {
  const GoogleIcon = ({ size = 24, ...props }) => {
    // Component implementation here
  };
    const { data: session} = useSession()
    if (session) {
      return (
        <div className="  text-center w-full mx-auto max-w-[1240px] mt-20">
        {session.user.email}<br/>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
      )
    }
    return (
      <main className="  text-center w-full mx-auto max-w-[1240px] mt-20">
        <h1 className="text-4xl font-extralight">Login Please</h1>
        <GoogleButton
        
          onClick={() => signIn("google",{ callbackUrl: "/"})}
          className="mx-auto max-w-[1240px] mt-20"
        /> 
      </main>
      
  
    )
}

