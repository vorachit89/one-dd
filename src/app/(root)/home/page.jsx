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

export default function RootPage() {
  const router = useRouter();
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
    <>
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
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="https://f.ptcdn.info/074/001/000/1357798846-tarot-o.jpg"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/285854465_344465274490165_7412955889648148507_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF90gawXONcbA4gogu8QMecflvBAbIg16J-W8EBsiDXomf2DbjhNeyl0AscrWKmSd71KlvNY8AiZ8PwZFyCZ-cU&_nc_ohc=YMZC_rFpuqAAX-7pvoV&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfDWDKgYad2O_cP7ZaBXZ_IoxeiQFqP5yzXwr477xWeeRg&oe=6604E3E6"
              alt="avatar"
            />
            <div>
              <Typography variant="h6">ยิปซี</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                ประวัติความเป็นมา
              </Typography>
            </div>
          </div>

          <h4 className="block my-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            รับดูดวง
          </h4>
          <p className="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            ก่อนอื่นต้องบอกก่อนว่า ไพ่ทาโรต์หรือไพ่ยิปซี
            ผมเคยเล่นศึกษาเมื่อ10ปีก่อน ตอนนี้คิดจะหวนกลับมาศึกษาอีกครั้ง
            จุดประสงค์ที่ตั้งกระทู้ขึ้นเหมือนเป็นการทำการบ้านเพื่อได้ศึกษาข้อมูลของไพ่ทาโรต์
            แต่ด้วยภาษาอังกฤษอ่อนแอจึงเน้นตำราภาษาไทยเป็นหลัก
            เดิมผมก็รู้จักในนามไพ่ยิปซี
            แต่จริงแล้วยิปซีคือชนเผ่าหนึ่งที่เร่ร่อนไปเรื่อยๆและอาชีพที่เป็นที่ทำให้คนรู้จักชนเผ่ายิปซี
            คือการทำนายโชคชะตาด้วยไพ่ทาโรต์
            (คงมีทำอาชีพอื่นด้วยมั้งแต่อาชีพหมอดูเด่นสุด)
            ผมไม่รู้และเคยเห็นว่าไพ่ทาโรต์แบบดั้งเดิมที่ชนเผ่ายิปซีใช้หน้าตาเป็นยังไง
            แต่ที่ผมรู้จักและใช้ศึกษาอยู่ก็คือแบบ Rider-Waite deck ยอดนิยม
          </p>
          <div className="flex gap-2">
            <Button variant="outlined">500 Like</Button>
            <Button onClick={navigateToView}>Read</Button>
          </div>
        </div>
      </div>
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="https://prangtipspk.files.wordpress.com/2010/08/att1513305.jpg"
            alt="card-image"
            className="object-cover w-500 h-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://img.a.transfermarkt.technology/portrait/big/451276-1700209677.jpg?lm=1"
              alt="avatar"
            />
            <div>
              <Typography variant="h6">Vorachit</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Chit
              </Typography>
            </div>
          </div>

          <h4 className="block my-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            ภาพสวย ๆ กับความหมายดี ๆ
          </h4>
          <p className="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            แม้ว่าพระอาทิตย์ ลาลับไป .. จงอย่าเสียใจ เข้มแข็งไว้ .. วันพรุ่งนี้
            พระอาทิตย์จะกลับมาใหม่ .. และอบอุ่น เช่นเดิม ..
          </p>
          <div className="flex gap-2">
            <Button variant="outlined">500 Like</Button>
            <Button onClick={navigateToView}>Read</Button>
          </div>
        </div>
      </div>
      {/* เลื่อนหน้า ลูกศร */}

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between mt-12">
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-medium">1</span>
              to
              <span className="font-medium">10</span>
              of
              <span className="font-medium">97</span>
              results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
