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
          express their feelings from the outside world by telling a story with
          a single picture. Then write articles about various stories that come
          into your daily life. whether good or bad Please tell and share. Let
          us know your story.
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
    </>
  );
}
