"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
import React from "react";

const Container = ({ children }) => {
  const router = useRouter();

  const navigateToView = () => router.push("/view");

  return (
    <div className="container mx-auto min-h-screen">
      {/* Header */}
      {/* Story Card */}

      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa3yrS9hPC7cLIunZiA3xEkolcqTUZWEonlIsj9zzqHOOWIemeASW.webp"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/38/thumb_137465_default_news_size_5.jpeg"
              alt="avatar"
            />
            <div>
              <Typography variant="h6">Chit</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                ไพ่ 1 เหรียญ จุดหลักความโชคดี
              </Typography>
            </div>
          </div>

          <h4 className="block my-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Lyft launching cross-platform service this week
          </h4>
          <p className="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            ACE of PENTACLES หรือที่เรียกกันว่า หนึ่งเหรียญ
            บางคนเรียกว่าเหรียญใหญ่
            เพราะจะเป็นรูปมือที่ลอยมาพร้อมกับมีเหรียญกลมๆ
            ใหญ่ที่สุดในบรรดาไพ่เหรียญด้วยกันที่มีทั้ง 14 ใบ ไล่ตั้งแต่ไพ่ 1
            เหรียญ ไปถึง ไพ่คิงเหรียญเลย ใช่แล้วครับไพ่ 1
            เหรียญนี่แหละที่เป็นจุดหลักเลยของความโชคดี ถูกหวย รวยเบอร์
            จับสลากได้รางวัลใหญ่ๆ มีทุกๆ อย่าง สารพัดสิ่งต่างๆ จะได้ทั้งสิ้น
            หรือการค้าขายอะไรก็ได้ดี เก็งกำไรทุกๆ อย่างได้ดี หุ้นขึ้น
            ของที่ซื้อเอาไว้ไม่ว่าจะเป็นสิ่งใดๆ ก็ตาม เช่นที่ดิน ทอง เพชร
            อสังหาริมทรัพย์ บ้าน คอนโด ของแบรนด์เนม
            มีผู้คนนำมาให้ได้ทั้งสิ้นขึ้นอยู่กับคนคนนั้นมีความเฮงเท่าไหน
            ซึ่งความเฮงของแต่ละคนก็ไม่เท่ากันอีก เช่น ความเฮงเป็นเงิน
            เป็นข้าวของ เป็นสิ่งของ ก็ล้วนมาจากไพ่ 1 เหรียญทั้งสิ้น พระเอก
            นางเอก ดารา ศิลปินที่มีแฟนคลับ มีแม่ยกที่คอยจะนำสิ่งของมาให้
            หรือพระสงฆ์ ที่มีคนนำสิ่งของมาถวาย มาทำบุญ
            ก็คือความโชคดีที่เป็นในรูปปัจจัย เป็นบุญกุศล
            ก็ต้องมีดวงความโชคดีเหมือนกันแต่จะเป็นในรูปแบบไหนก็ใช้ได้เช่นเดียวกับฆราวาส
            ได้เช่นเดียวกัน นอกจากไพ่ 1 เหรียญก็ยังมีไพ่ที่ระบุว่ามีโชคลาภ
            เช่นเดียวกันอีก ไพ่เดอะซัน พระอาทิตย์ THE SUN ไพ่โลก THE WORLD
            ไพ่กงล้อสมบัติ WHEEL of FORTUNE ที่มีความหมายโชคดีเหมือนกันทุกๆ
            อย่าง โชคลาภ โชคดีไปยันความรัก ได้คนดี คนร่ำรวย อยู่ด้วยกันร่ำรวย
            ดวงสมพงศ์กันมาก
          </p>
          <div className="flex gap-2">
            <Button variant="outlined">500 Like</Button>
            <Button onClick={navigateToView}>Read</Button>
          </div>
        </div>
      </div>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center mt-12 md:justify-between">
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
  );
};

export default Container;
