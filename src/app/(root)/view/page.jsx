"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const navigateToStory = () => {
    router.push("/");
  };
  return (
    <>
      <div className="mx-auto ">
        <img
          className="h-99 w-full object-cover mt-12 object-center"
          src="https://www.thestreetratchada.com/upload/contents/17084007972.jpg"
          alt="ไพ่ Major Arcana 22 ใบ"
        />

        <div className="mt-16 font-normal text-base">
          <p>
            ไพ่ Major Arcana 22 ใบ ไพ่ Major Arcana ของชุดไพ่ยิปซี ไพ่ทาโร่นี้
            ถือว่าเป็นสำรับหลัก ซึ่งจะมี 22 ใบ ไว้เพื่อใช้ในการดูดวงภาพรวม
            ดูเพื่อตอบคำถามต่างๆ ของแต่ละด้านที่มีการระบุหมวดหมู่ไว้อย่างชัดเจน
            เป็นสำรับหลักที่ดูครอบคลุมได้ตั้งแต่ผู้เริ่มต้นศึกษาศาสตร์การดูดวง
            ไปจนถึงหมอดูมืออาชีพ สามารถใช้แค่ 22
            ใบนี้ก็ได้ถ้าหากใครไม่ต้องการต่อยอด
            โดยไพ่สำรับหลักจะประกอบด้วยความหมายต่างๆ ดังนี้ <br />
            1. ไพ่ The Fool หมายถึง การเริ่มต้นใหม่ เส้นทางใหม่ๆ หรือสิ่งใหม่ๆ
            ที่วางแผนไว้สามารถเริ่มต้นได้ ดำเนินได้แต่จะมีความเสี่ยงร่วมด้วย
            หรืออาจหมายถึงไพ่ที่เกี่ยวข้องกับความเสี่ยงเลยก็ได้
            <br /> 2. ไพ่ The Magician หมายถึง การเริ่มต้นลงมือทำและการต่อยอด
            สามารถทำได้ทุกอย่างที่ต้องการ วางแผนอะไรก็สามารถเริ่มได้เลย
            หรือบางครั้งไพ่ The Magician ก็หมายถึงด้านความรักได้เช่นกัน
            เป็นความนิยมมากใน Pantip <br />
            3. ไพ่ The High Priestess ไพ่ The High Priestess มีความหมายถึง
            ไพ่ที่บ่งเกี่ยวกับความเก่ง ความสามารถสูง ความเฉลียวฉลาด <br />
            4. ไพ่ The Empress หมายถึง ความอุดมสมบูรณ์ทุกอย่าง ความมั่งมี
            ความเฟื่องฟู ไม่ว่าจะเป็นด้านใดก็ตาม ทั้งทรัพย์สิน เงินทอง
            ความมั่งคั่งทั้งหมด <br />
            5. ไพ่ The Emperor ไพ่ The Empress มี ความหมายถึงอำนาจ การมีอำนาจ
            การตกอยู่ภายใต้ผู้ที่มีอำนาจมากกว่า ความกดดัน
            หรือทางทรัพย์สินจะหมายถึงความมั่งคั่ง
            <br /> 6. ไพ่ The Hierophant หมายถึง การเป็นที่พึ่งพาของผู้อื่น
            การต้องรับผิดชอบเกี่ยวกับเรื่องของผู้อื่น การเป็นผู้นำ <br />
            7. ไพ่ The Lovers หมายถึง ความรักที่ดี
            หรือการมีเรื่องที่ต้องตัดสินใจเข้ามา <br />
            8. ไพ่ The Chariot หมายถึง ความมุ่งมั่นในการจัดการ หรือการทำสิ่งใดๆ
            ก็ตาม หากเดินหน้าต่อไปก็จะสำเร็จได้ตามที่ต้องการ <br />
            9. ไพ่ Strength หมายถึง การจัดการปัญหา อุปสรรค
            และการใช้ชีวิตที่เก่งมาก แสดงถึงคนที่เข้มแข็ง
            สามารถจัดการทุกอย่างได้ดี <br />
            10. ไพ่ The Hermit หมายถึง ความต้องการเวลาในการทบทวนตัวเอง
            และต้องการชีวิตที่ส่วนตัวมากขึ้นในการจัดการสิ่งต่างๆ{" "}
          </p>
        </div>
        <div class="w-full mb-4 mt-24 border border-gray-200 rounded-lg bg-gray-50">
          <div class="relative w-full min-w-[200px]">
            <textarea
              rows="8"
              class="peer h-0 min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
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
              </button>
              <button
                class="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
