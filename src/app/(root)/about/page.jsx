"use client";

import {
  Button,
  Avatar,
  Typography,
  Card,
  CardBody,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto min-h-screen">
        {/* Header */}
        <div className="flex items-center py-8">
          <div className="w-4/12">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf241d2cb2df87a1a/644eb56f41057c528cb47798/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-30T193705.259.png?auto=webp&format=pjpg&width=3840&quality=60"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Jürgen Klopp</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  MANAGER Liverpool
                </Typography>
              </div>
            </div>
          </div>
          <div className="w-4/12 text-center">
            <Typography variant="h1">One DD</Typography>
          </div>
          <div className="w-4/12 text-right">
            <Button>Logout</Button>
          </div>
        </div>
        {/* Menu */}
        <div className="flex gap-3 justify-end items-center">
          <Button>Home </Button>
          <Button>Story </Button>
          <Button>About </Button>
        </div>
      </div>
    </>
  );
}
