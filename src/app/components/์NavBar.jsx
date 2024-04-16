"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";
import GoogleIcon from "@/public/images/google.png";

import {
  Button,
  Avatar,
  Typography,
  Card,
  CardBody,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";

const NavBar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  const navigateToView = () => router.push("/view");

  const handleClickLogin = () => {
    signIn("google");
  };

  const handleClickLogout = () => {
    signOut();
  };

  

  return (
    <div className="container mx-auto">
      <div className="flex items-center py-8">
        <div className="w-4/12">
          {status == "authenticated" ? (
            <div className="flex items-center gap-4">
              <Avatar src={session?.user?.image} alt="avatar" size="xl" />
              <div>
                <Typography variant="h4">{session?.user?.name}</Typography>
                <Typography variant="lead" color="gray" className="font-normal">
                  {session?.user?.email}
                </Typography>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="w-4/12 text-center">
          <Typography variant="h1">One DD</Typography>
        </div>

        <div className="w-4/12 text-right">
          {status == "authenticated" ? (
            <Button onClick={handleClickLogout}>Logout</Button>
          ) : (
            <Button
              className="flex items-center ml-auto gap-2"
              onClick={handleClickLogin}
            >
              <Image
                src={GoogleIcon}
                loading="lazy"
                className="w-4"
                alt="google"
                width={16}
                height={16}
                priority={false}
              />
              Login with Google
            </Button>
          )}
        </div>
      </div>
      <div className="flex gap-3 justify-end items-center">
          <Link href="/home">
            <Button>Home </Button>
          </Link>
          <Link href="/story">
            <Button>Story </Button>
          </Link>
          <Link href="/about">
            <Button>About </Button>
          </Link>
        </div>
    </div>
  );
};

export default NavBar;
