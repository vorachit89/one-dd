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

export default function RootPage() {
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
        {/* Story Card */}

        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa3yrS9hPC7cLIunZiA3xEkolcqTUZWEonlIsj9zzqHOOWIemeASW.webp"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/38/thumb_137465_default_news_size_5.jpeg"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Chit</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  ไพ่ 1 เหรียญ จุดหลักความโชคดี
                </Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lyft launching cross-platform service this week
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
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
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                500 Like
                <div class="flex gap-2 ">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <button
                      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    ></button>
                  </button>
                  <button
                    class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://f.ptcdn.info/074/001/000/1357798846-tarot-o.jpg"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/285854465_344465274490165_7412955889648148507_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF90gawXONcbA4gogu8QMecflvBAbIg16J-W8EBsiDXomf2DbjhNeyl0AscrWKmSd71KlvNY8AiZ8PwZFyCZ-cU&_nc_ohc=YMZC_rFpuqAAX-7pvoV&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfDWDKgYad2O_cP7ZaBXZ_IoxeiQFqP5yzXwr477xWeeRg&oe=6604E3E6"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">ยิปซี</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  ประวัติความเป็นมา
                </Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              รับดูดวง
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
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
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                500 Like
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <button
                      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    ></button>
                  </button>
                  <button
                    class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://lh3.googleusercontent.com/proxy/ntaQdGdxczJVFQaHJJRgtQrX_OXYSatdiPehykhOcYsY7zfEF5vxahnBtEI_Lxgh_Ve-2SQN8hM-31gNCMSplKvdnbN1qLz_Y-No1UVOZvVNn6-_HHOGrAfSYb2bGC8u6KUm6fs"
              alt="card-image"
              class="object-cover w-500 h-500"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/285854465_344465274490165_7412955889648148507_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF90gawXONcbA4gogu8QMecflvBAbIg16J-W8EBsiDXomf2DbjhNeyl0AscrWKmSd71KlvNY8AiZ8PwZFyCZ-cU&_nc_ohc=YMZC_rFpuqAAX-7pvoV&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfDWDKgYad2O_cP7ZaBXZ_IoxeiQFqP5yzXwr477xWeeRg&oe=6604E3E6"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Thunradee</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Jaj
                </Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              เทคนิคการทำนายไพ่ยีปซีจาก สี ด้วยไพ่ Rider Waite
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              ในเรื่องของสีนั้น จะว่าเป็นกฏในการทำนายก็ไม่ได้นะครับ
              ยิ่งในปัจจุบันที่ไพ่มีมากมายหลายรูปแบบตามแต่คนจะวาด ยิ่งทำให้ สี
              ต่างๆนั้นเรานำเป็นกฏเกณฑ์ให้ทำนายเหมือนกันทุกสำรับไม่ได้เลยทีเดียว
              แต่ถ้าท่านเป็นผู้ที่่่ไพ่ชุด Rider Waite แล้วละก็
              จะสามารถนำสีมาทำนายได้อยู่นะครับ
              เพราะไพ่ชุดนี้มีความหมายของสีที่นำมาใช้ได้อย่างชัดเจนมาก
              จนมองข้ามไม่ได้เลยทีเดียวครับ การใช้ สี ในการทำนายไพ่ ยิปซี นั้น
              สามารถทำให้เราดูสภาพทางด้านอารมณ์ได้ในระดับนึงเลยนะครับ
              สถานการณ์ที่เป็นอยู่และที่กำลังจะเกิดขึ้น
              สามารถทำนายด้วยสีได้เลยแทบจะทันที
              เพียงแค่มองแวบเดียวก็ทราบได้เลยว่าการทำนายในครั้งนั้นจะไปในโทนไหน
              บวกหรือลบ บางครั้งเราใช้สีในการทำนายเลยโดยไม่ได้มองที่หน้าไพ่
              เพื่อประเมินสถานการณ์ดีร้ายได้เลยนะครับ
              เห็นแบบนี้จะบอกว่าสีไม่สำคัญเห็นจะไม่ได้แล้ว
              มาลองเอาข้อมูลไปพิสูจน์กันดูครับ
            </p>
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                500 Like
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <button
                      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    ></button>
                  </button>
                  <button
                    class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://prangtipspk.files.wordpress.com/2010/08/att1513305.jpg"
              alt="card-image"
              class="object-cover w-500 h-500"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://img.a.transfermarkt.technology/portrait/big/451276-1700209677.jpg?lm=1"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Vorachit</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Chit
                </Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              ภาพสวย ๆ กับความหมายดี ๆ
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              แม้ว่าพระอาทิตย์ ลาลับไป .. จงอย่าเสียใจ เข้มแข็งไว้ ..
              วันพรุ่งนี้ พระอาทิตย์จะกลับมาใหม่ .. และอบอุ่น เช่นเดิม ..
            </p>
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                500 Like
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <button
                      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    ></button>
                  </button>
                  <button
                    class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://www.thestreetratchada.com/upload/contents/17084007972.jpg"
              alt="card-image"
              class="object-cover w-500 h-500"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://img.a.transfermarkt.technology/portrait/big/451276-1700209677.jpg?lm=1"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Test</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                ></Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              ความหมายไพ่ยิปซีทั้ง 78 ใบ สายมูห้ามพลาด ทำนายดวงตัวเองได้ง่ายๆ
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              ไพ่ยิปซีหรือที่เรียกอีกอย่างว่าไพ่ทาโร่ ทั้ง 78 ใบ
              เป็นศาสตร์ที่สายมูชื่นชอบกันมากที่สุด ใครที่ชอบการดูดวง
              ทำนายดวงชะตา หรือชอบในความหมายต่างๆ
              ที่ไพ่ต้องการสื่อกับผู้ทำนายนั้น
              ต้องห้ามพลาดกับหัวข้อนี้ที่จะมาแนะนำถึงการทำนายดวงตัวเองได้ง่ายๆ
              มาศึกษาไพ่แต่ละใบไปพร้อมกันได้ในบทความนี้
            </p>
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                500 Like
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <button
                      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    ></button>
                  </button>
                  <button
                    class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://khamchanod.com/wp-content/uploads/2023/06/MAJOR-ARCANA-1024x538.png"
              alt="card-image"
              class="object-cover w-500 h-500"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.6435-9/52599018_2347960302101931_7992432709014126592_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFz1V2iX4JAcZUghEB-2B1pWIlGl1ufjX1YiUaXW5-NfYJ5U4NvEGxf8wM8Q7S1pD4PfNEc9bCuz7nowUYWzvOm&_nc_ohc=hgHv3y7GpjsAX_J9tSi&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfAOFmhPGq9bB4EQKEloOkxWc-RQNAcvCSWJYV_aCN9vTA&oe=6627D08B"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Midinobare</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                ></Typography>
                Muay
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              ความหมายของ ไพ่ทาโรต์ - ไพ่ชุดใหญ่ (MAJOR ARCANA)
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              ไพ่ยิปซี หรือ ไพ่ทาโรต์ (Tarot Cards)
              เป็นไพ่ที่ได้รับความนิยมอย่างมาก
              เพราะสามารถใช้ในการทำนายดวงชะตาได้อย่างแม่นยำ
              ทั้งการดูดวงด้านความรัก การเงิน การงาน และสุขภาพ ไพ่ยิปซี หรือ
              ไพ่ทาโรต์ (Tarot Cards) มีทั้งหมด 78 ใบ โดยมีไพ่ชุดใหญ่ (Major
              Arcana) จำนวน 22 ใบ จากทั้งหมด 78 ใบ เริ่มตั้งแต่หมายเลข 0 ถึง 21
              โดยวันนี้จะพาทุกคนมาดูความหมาย และคำทำนายของ ไพ่ชุดใหญ่ (Major
              Arcana) ทั้ง 22 ใบกันค่ะ
            </p>
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                1.5K UnLike
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <button
                      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    ></button>
                  </button>
                  <button
                    class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://khamchanod.com/wp-content/uploads/2023/06/M_1.png"
              alt="card-image"
              class="object-cover w-500 h-500"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://khamchanod.com/wp-content/uploads/2023/06/M_1.png"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Zero</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  ดาวตัวแทนไพ่ คือ ดาวยูเรนัส
                </Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              ดาวตัวแทนไพ่ คือ ดาวยูเรนัส
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              ไพ่ใบนี้เกี่ยวกับการสร้างสรรค์สิ่งใหม่ บ่งบอกถึงพลัง ความรู้
              ความสามารถ ที่สามารถสร้างสิ่งต่างๆขึ้นมาใหม่ได้
              ไพ่ใบนี้บ่งบอกลักษณะของคนที่มีความรู้ ความสามารถ ฉลาด เข้าใจโลก
              เป็นนักวิชาการ นักวิจัย มีพรสวรรค์ มีความคิดสร้างสรรค์
              เจรจาต่อรองเก่ง เจ้าเล่ห์ เป็นนักคิด นักวางแผน การงาน
              เป็นคนสื่อสารเก่ง ฉลาด เรียนรู้เร็ว ทำงานดี นำเสนอเก่ง
              เหมาะกับงานที่เกี่ยวข้องกับการสื่อสาร งานที่พบปะผู้คนจำนวนมาก
              การเงิน หาเงินเก่ง พูดจาเป็นเงินเป็นทอง การเงินคล่องตัว ไม่ขาดมือ
              แต่ก็ใช้จ่ายเก่งเช่นกัน ไม่ค่อยมีเงินเก็บ เพราะได้มาก็ใช้หมด
              ความรัก คนโสดจะพบคนคุยใหม่ แต่ต้องระวังเจอคนไม่จริงใจ
              เข้ามาฉวยโอกาส เล่ห์เหลี่ยมใส่ หรืออาจะเป็นคนที่ดีแต่ปาก พูดเก่ง
              แต่อาจไม่ได้เก่งอย่างที่คิด สำหรับคนมีคู่ หากมีเรื่องไม่เข้าใจกัน
              ตอนนี้ถือเป็นโอกาสที่ดี ที่จะพูดคุยปรับความเข้าใจกัน สุขภาพ
              ระวังโรคเกี่ยวกับทางเดินหายใจ ภูมิแพ้ โรคเครียด โรคจิตเวช
              ไพ่กลับหัว เกี่ยวกับความไม่ซื่อ การหลอกลวง
              ความสัมพันธ์ที่เหมือนจะดี อาจจะมีอะไรแอบแฝงอยู่
            </p>
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                500 Like
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <button
                      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    ></button>
                  </button>
                  <button
                    class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </button>
            </a>
          </div>
        </div>
        {/* เลื่อนหน้า ลูกศร */}

        <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div class="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between mt-12">
            <div>
              <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav
                class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
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
