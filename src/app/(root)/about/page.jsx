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
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto min-h-screen">
        {/* Header */}
        <div className="flex items-center py-8">
          <div className="w-4/12">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/406581965_1032166391322962_8152656003267527206_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pD4G2iRRi1wAX9PBIg3&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfBIcePUNwL3J0WjfTg7uywq7ANn5uvfMbx1wtvt9mJ76A&oe=6611F167"
                alt="avatar"
                size="xxl"
              />
              <div>
                <Typography variant="h4">Vorachit</Typography>
                <Typography variant="lead" color="gray" className="font-normal">
                  ทำแม่มทุกอย่าง
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
        <div className=" mt-10">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src="https://c4.wallpaperflare.com/wallpaper/147/130/412/style-pen-candle-book-still-life-hd-wallpaper-thumb.jpg"
            alt="wallpaper"
          />
        </div>
        <Typography variant="h3">
          <p className="mt-8">About My Websit</p>
        </Typography>
        <Typography variant="h4">
          <p className="mt-10">
            Welcome to the website This website was created to allow everyone to
            express their feelings from the outside world by telling a story
            with a single picture. Then write articles about various stories
            that come into your daily life. whether good or bad Please tell and
            share. Let us know your story.
          </p>
        </Typography>
        <Typography variant="h4">
          <p className="mt-10">
            ขอต้อนรับสู่เว็บไซด์
            เว็บนี้ทำขึ้นมาเพื่อให้ทุกคนได้บ่งบอกความรู้สึกจากโลกภายนอกโดยการเล่าเรื่องราวด้วยภาพหนึงภาพ
            แล้วเขียนเป็นบทความเรื่องราวต่างๆที่ผ่านเข้ามาในชีวิตแต่ละวัน
            ไม่ว่าจะดีหรือไม่ดี ขอให้เล่าแล้วแชร์ เรื่องราวของคุณให้เราได้รับรู้
            ไม่ว่าจะเป็นยังไง ขอให้ทุกวันของคุณเป็นวันที่ดี ขอบคุณครับ
          </p>
        </Typography>
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center mt-20 md:justify-between">
          <Typography color="blue-gray" className="font-normal">
            &copy; 2023 Material Tailwind
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
