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

export default function RootPage() {
  
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
        {/* Story Card */}
        <div className="mt-12 flex items-center">
          <div className="w-6/12">
            <Card className="w-full max-w-[48rem] flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/418986779_122124428384205764_5727181500832620396_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8xyxl9yW6Gfv-Gqcko-id8-J813UL65rz4nzXdQvrmkeADESDMhHavD4UOzD3NEOKkFPm1a0MUT0J-_Fz_Ity&_nc_ohc=Vym38uhjLvkAX-1s52S&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfCr6RnPXyxuO-4UkABHVoijNcUgd9o2fjIfmk7baRSOlQ&oe=6603B8FF"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 uppercase"
                >
                  startups
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses. Yet its own business model
                  disruption is only part of the story
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar
                    src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/434209621_447515780958332_3342858044658867315_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFflvD6CVLtIMtdWkLu2Z9wQvKZH8VtUqFC8pkfxW1SoTTsHNxF_8DqOwyU4lwVwmZW-ZmJE_6y8p5NHK7Kwjnb&_nc_ohc=Pk7q12S1nRYAX_iMEmO&_nc_ht=scontent.fbkk29-5.fna&oh=00_AfB453cnZ6Rttytmg309WKGYftO5a2pnaLflGfqb5xWxEw&oe=6602BDA4"
                    alt="avatar"
                  />
                  <div>
                    <Typography variant="h6">Steven George Gerrard</Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Manager
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="w-6/12">
            <Card className="w-full max-w-[48rem] flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.6435-9/174458486_2972431862988102_2087608554123268636_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFPYLGLEM2lMA8nz15Qs3Nb_NscRhz-cpv82xxGHP5ysDjt2tcpcTnqC3WrIcS_fKNor2GfPejeb6U96WW6Ma1&_nc_ohc=yBlUm5uGPMkAX8bUZlN&_nc_oc=AdhPuj0yszkkYKwPgDl1YHyZ_rcmkJhskAuj3TK5WhHm9-VuqIXtBnO7Lj4-9vVeSs4&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfAVEoyK6WYJhdTrWjVgVzJPXxMDjAymTilec8kPmCglnA&oe=6625349B"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 uppercase"
                >
                  startups
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses. Yet its own business model
                  disruption is only part of the story
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar
                    src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/434203262_447748344268409_3905821622086664686_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFXIbLNrX_HpoUm1hMrXUx7FQ0zzID0beAVDTPMgPRt4JaUcVwpm-5noSAf4EYgwjngv9S-VVmcHPSNzZLkOkow&_nc_ohc=n8eEx5STR3IAX-EkA7c&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfAMGx5fjE0NDkcF5xprnwpwmzvRa1jz128wl2ZR_Gr8PA&oe=6602A2D5"
                    alt="avatar"
                  />
                  <div>
                    <Typography variant="h6">Fernando José Torres Sanz</Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Manager
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex justify-center mt-12 ">
          <Button>View My All Story </Button>
        </div>
        <div className="w-6/12 text-start mt-10">
          <Typography variant="h1">SHERE YOU STORY</Typography>
        </div>

        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <div class="relative w-full min-w-[200px]">
            <textarea
              rows="8"
              class="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            ></textarea>
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Your Story...
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
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[120rem] flex-row mt-8">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://tmssl.akamaized.net/images/foto/galerie/dominik-szoboszlai-liverpool-2023-1690205426-112256.jpg?lm=1690205435"
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
                <Typography variant="h6">Trent Alexander-Arnold</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Liverpool 66
                </Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lyft launching cross-platform service this week
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
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
              src="https://www.khaosod.co.th/wpapp/uploads/2024/01/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%95%E0%B9%8C-%E0%B8%AB%E0%B8%87%E0%B8%AA%E0%B9%8C-222.jpg"
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://img.a.transfermarkt.technology/portrait/big/451276-1700209677.jpg?lm=1"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Dominik Szoboszlai</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Liverpool 8
                </Typography>
              </div>
            </div>

            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lyft launching cross-platform service this week
            </h4>
            <p class="block mb-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
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
        <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div class="flex flex-1 justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
    <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
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
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Previous</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>
        
        <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
        <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Next</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
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
