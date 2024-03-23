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
              <Typography variant="h6">Jürgen Klopp</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                MANAGER Liverpool
              </Typography>
            </div>
          </div>
          <div>
          <Typography variant="h3"><p className="mt-6">ท้องฟ้า</p></Typography>
          <Typography variant="h5"><p className="mt-6">
              ได้แต่เหลียวมองไปสุดฟ้าไกล
              มันช่างน่าเสียดายที่เราไปไม่ถึงขอบฟ้าจบเสียที
              ที่เธอต้องทนทรมานเดินบนทางที่เราสองคน หวังกันไปยังฝันสุดฟ้า
              ปิดฉากเสียที เมื่อเจอคนที่ดี จงโชคดีกับเส้นทางที่ยังเหลือข้างหน้า
              เธอไปกับเขาคงดีกว่า * ยอมเข้าใจยอมเข้าใจ
              จะไปด้วยกันก็มีแต่เหนื่อยล้า ฉันเข้าใจ ฉันเข้าใจที่เธอร่ำลา **
              ขอบฟ้า(เธอ)ต้องกลายเป็นเขาที่พาไปทุกสิ่งที่ฝันกันเอาไว้
              จบแล้วไม่เหลือสักอย่าง ฉันทำได้เพียงแค่เท่านี้
              มาส่งเธอได้แค่ครึ่งทาง ก็คงต้อง ยอมรับมันยอมรับมัน (
              พรุ่งนี้ไม่มีแล้ว ) (ก็คงต้องยอมรับมัน)จะเจ็บเท่าไหร่ฉันก็จะทน
              เมื่อเธอจะไปฉันห้ามไม่ได้ต้องปล่อยเธอไปทั้งน้ำตา แม้แทบขาดใจ
              จะเจ็บเท่าไหร่ฉันก็จะยอม ให้เธอมีวันที่ดีข้างหน้า
              ให้เธอเดินไปพบความสุข ที่ตรงขอบฟ้า ฉันยอมยอม
              จะเจ็บเท่าไหร่ฉันก็จะทน ให้เธอเดินไปที่ตรงขอบฟ้า ให้เธอไปดี
              โชคดีเถิดหนา จะเจ็บเท่าไหร่ฉันก็จะทน</p>
            </Typography>
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
