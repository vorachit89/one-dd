"use client";

import {
  Button,
  Avatar,
  Typography,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Textarea,
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
                src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/299084657_759034651969472_2646600942601389682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqRhufdEIIcKGsvH82Zjy8cjr6_yLM-JtyOvr_Isz4mzyMJboPaKHOZpdQjIKC25dTHt-8dCS8-LAyQ1-YZv_r&_nc_ohc=-DoFoBA7mhAAX_E_d-x&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfDDVWt6Xi1aIeaWLGCIorANYiWkGUSqEf0Wn_m5EoMz1w&oe=660562CC"
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
            src="https://img.pikbest.com/wp/202344/partial-captivating-sunrise-a-partially-cloudy-sky-with-stunning-mix-of-colors_9902029.jpg!w700wp"
            alt="Sky"
          />
        </div>

        <div className=" mt-12">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf241d2cb2df87a1a/644eb56f41057c528cb47798/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-30T193705.259.png?auto=webp&format=pjpg&width=3840&quality=60"
              alt="avatar"
            />
            <div>
              <Typography variant="h4">Jürgen Klopp</Typography>
              <Typography variant="lead" color="gray" className="font-normal">
                MANAGER Liverpool
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="h3">
              <p className="mt-6">ท้องฟ้า</p>
            </Typography>
            <Typography variant="h5">
              <p className="mt-6">
                ได้แต่เหลียวมองไปสุดฟ้าไกล
                มันช่างน่าเสียดายที่เราไปไม่ถึงขอบฟ้าจบเสียที
                ที่เธอต้องทนทรมานเดินบนทางที่เราสองคน หวังกันไปยังฝันสุดฟ้า
                ปิดฉากเสียที เมื่อเจอคนที่ดี
                จงโชคดีกับเส้นทางที่ยังเหลือข้างหน้า เธอไปกับเขาคงดีกว่า *
                ยอมเข้าใจยอมเข้าใจ จะไปด้วยกันก็มีแต่เหนื่อยล้า ฉันเข้าใจ
                ฉันเข้าใจที่เธอร่ำลา **
                ขอบฟ้า(เธอ)ต้องกลายเป็นเขาที่พาไปทุกสิ่งที่ฝันกันเอาไว้
                จบแล้วไม่เหลือสักอย่าง ฉันทำได้เพียงแค่เท่านี้
                มาส่งเธอได้แค่ครึ่งทาง ก็คงต้อง ยอมรับมันยอมรับมัน (
                พรุ่งนี้ไม่มีแล้ว ) (ก็คงต้องยอมรับมัน)จะเจ็บเท่าไหร่ฉันก็จะทน
                เมื่อเธอจะไปฉันห้ามไม่ได้ต้องปล่อยเธอไปทั้งน้ำตา แม้แทบขาดใจ
                จะเจ็บเท่าไหร่ฉันก็จะยอม ให้เธอมีวันที่ดีข้างหน้า
                ให้เธอเดินไปพบความสุข ที่ตรงขอบฟ้า ฉันยอมยอม
                จะเจ็บเท่าไหร่ฉันก็จะทน ให้เธอเดินไปที่ตรงขอบฟ้า ให้เธอไปดี
                โชคดีเถิดหนา จะเจ็บเท่าไหร่ฉันก็จะทน
              </p>
            </Typography>
          </div>
          <div class="w-full mb-4 mt-20 border border-gray-200 rounded-lg bg-gray-50">
            <div class="relative w-full min-w-[200px]">
              <textarea
                rows="8"
                class="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              ></textarea>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Comment...
              </label>
            </div>
            <div class="flex w-full justify-between py-1.5">
              <button
                class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              ></button>
              <div class="flex gap-2">
                <button
                  type="button"
                  class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4 mr-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                  </svg>
                  <span class="sr-only">Add emoji</span>
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                  <span class="sr-only">Upload image</span>
                </button>
                <button
                  class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Post Comment
                </button>
              </div>
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
    </>
  );
}
