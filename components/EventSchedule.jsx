import Link from "next/link";
import { format, getDate } from "date-fns";
import React, { Fragment, useState } from "react";
import CalenderCard from "./CalenderCard";
import { useRouter } from "next/router";

const EventSchedule = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [view, setView] = useState("12hr");
  const router = useRouter();
  const data = router.query;
  const timeFormatList = [
    {
      id: 1,
      format: "12hr",
      slots: [
        "10:15am",
        "10:45am",
        "11:15am",
        "11:45am",
        "12:15pm",
        "12:45pm",
        "1:15pm",
        "1:45pm",
        "2:15pm",
        "2:45pm",
        "3:15pm",
        "3:45pm",
        "4:15pm",
        "4:45pm",
        "5:15pm",
        "5:45pm",
      ],
    },
    {
      id: 2,
      format: "24hr",
      slots: [
        "10:15",
        "10:45",
        "11:15",
        "11:45",
        "12:15",
        "12:45",
        "13:15",
        "13:45",
        "14:15",
        "14:45",
        "15:15",
        "15:45",
        "16:15",
        "16:45",
        "17:15",
        "17:45",
      ],
    },
  ];
  return (
    <div>
      <div className="dark:bg-darkgray-100 sm:dark:border-darkgray-300 bg-white pb-4 md:pb-0 border-gray-500 overflow-hidden md:rounded-md md:border">
        <div className="overflow-hidden md:flex">
          {/* //first card */}
          <div className="sm:dark:border-darkgray-200 flex flex-col border-gray-200 p-5 sm:border-r min-w-full md:w-[230px] md:min-w-[230px]">
            <ul>
              <li className="-mr-2 inline-block">
                <a href="https://cal.com/bmnepaltest">
                  <img
                    alt="Milan Thapa"
                    className="rounded-full border-2 dark:border-darkgray-100 border-white h-10 w-10"
                    src="https://avatars.githubusercontent.com/u/59304271?v=4"
                    data-state="closed"
                  />
                </a>
              </li>
            </ul>
            <h2 className="mt-2 break-words text-sm font-medium text-gray-600 dark:text-gray-300">
              Milan Thapa
            </h2>
            <h1 className="font-cal dark:text-darkgray-900 mb-6 break-words text-2xl font-semibold text-gray-900">
              {data.title}
            </h1>
            <div className="dark:text-darkgray-600 flex flex-col space-y-4 text-sm font-medium text-gray-600">
              <div className="dark:text-darkgray-600 mr-6 flex w-full flex-col space-y-2 break-words text-sm text-gray-600">
                <div className="flex flex-row items-center text-sm font-medium">
                  <img
                    src="https://cal.com/app-store/dailyvideo/icon.svg"
                    className="mr-[10px] ml-[2px] h-4 w-4 opacity-70 dark:opacity-100 "
                    alt="Cal Video icon"
                  />
                  <p className="truncate" data-state="closed">
                    Call Video
                  </p>
                </div>
              </div>
              <div className="flex flex-nowrap text-sm font-medium">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="min-h-4 min-w-4 mr-[10px] ml-[2px] inline-block"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {data.allocatedTime}
              </div>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r1i:"
                data-state="closed"
                className="min-w-32 dark:text-darkgray-600 radix-state-open:bg-gray-200 dark:radix-state-open:bg-darkgray-200 group relative mb-2 -ml-2 inline-block rounded-md px-2 py-2 text-left text-gray-600"
              >
                <p className="flex items-center text-sm font-medium">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="min-h-4 min-w-4 mr-[10px] ml-[2px] -mt-[2px] inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Asia/Krasnoyarsk
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="min-h-4 min-w-4 ml-1 inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </p>
              </button>
            </div>
            <div className="mt-auto hidden md:block">
              <div className="flex h-full flex-col justify-end">
                <Link href={"/"}>
                  <button title="Profile">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dark:text-darkgray-600 h-4 w-4 text-black transition-opacity hover:cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    <p className="sr-only">Go Back</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* //second card */}
          <div className="mt-8 px-4 pb-4 sm:mt-0 md:min-w-[300px] md:px-5 lg:min-w-[455px] sm:dark:border-darkgray-200 border-gray-200 sm:border-r sm:p-4 sm:pr-6">
            <CalenderCard setOpen={setOpen} setSelectedDate={setSelectedDate} />
          </div>
          {/* //third card */}
          {open && (
            <div
              className={`relative ${
                open ? "translate-x-0" : "translate-x-full"
              } transition-all duration-700 ease-in-out`}
            >
              <div className="dark:bg-darkgray-100 mt-8 flex h-full w-full flex-col px-4 text-center sm:mt-0 sm:p-5 md:-mb-5 md:min-w-[200px] lg:min-w-[300px]">
                <div className="mb-6 flex items-center text-left text-base">
                  <div className="mr-4">
                    <span className="dark:text-darkgray-800 font-semibold text-gray-900">
                      {format(selectedDate, "EEEE").slice(0, 3)},
                    </span>
                    <span className="text-gray-500 font-medium">
                      {" "}
                      {format(selectedDate, "LLLL")} {getDate(selectedDate)}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="relative inline-flex rounded-md border border-gray-200 p-1 outline-none">
                      <span
                        className={`absolute top-[4px] bottom-[4px] z-[0] rounded-[4px] bg-gray-200 transition-all ${
                          view === "12hr"
                            ? "left-[4px] w-[47px]"
                            : "left-[51px] w-[50px]"
                        }`}
                      ></span>
                      <button
                        type="button"
                        role={"radio"}
                        id="12hr"
                        onClick={() => setView("12hr")}
                        className="relative rounded-[4px] px-3 py-1 text-sm  hover:font-medium"
                      >
                        12h
                      </button>
                      <button
                        type="button"
                        id="24hr"
                        role={"radio"}
                        onClick={() => setView("24hr")}
                        className="relative rounded-[4px] px-3 py-1 text-sm  hover:font-medium"
                      >
                        24h
                      </button>
                    </div>
                  </div>
                </div>
                <div className="-mb-5 grid flex-grow grid-cols-1 gap-x-2 overflow-y-auto sm:block md:h-[364px]">
                  {view === "12hr"
                    ? timeFormatList[0].slots.map((slot, index) => (
                        <Fragment key={index}>
                          <Link
                            href={{
                              pathname: `${
                                "/bmnepaltest/book/" + data.allocatedTime
                              }`,
                              query: {
                                ...data,
                                slot,
                                view,
                                selectedDate: JSON.stringify(selectedDate),
                              },
                            }}
                            className="text-primary-500 hover:border-gray-900 hover:bg-gray-50 dark:bg-darkgray-200 dark:hover:bg-darkgray-300 dark:hover:border-darkmodebrand mb-2 block rounded-md border bg-white py-2 text-sm font-medium dark:border-transparent dark:text-neutral-200"
                          >
                            {slot}
                          </Link>
                        </Fragment>
                      ))
                    : timeFormatList[1].slots.map((slot, index) => (
                        <Fragment key={index}>
                          <Link
                            href={{
                              pathname: `${
                                "/bmnepaltest/book/" + data.allocatedTime
                              }`,
                              query: {
                                ...data,
                                slot,
                                view,
                                selectedDate: JSON.stringify(selectedDate),
                              },
                            }}
                            className="text-primary-500 hover:border-gray-900 hover:bg-gray-50 dark:bg-darkgray-200 dark:hover:bg-darkgray-300 dark:hover:border-darkmodebrand mb-2 block rounded-md border bg-white py-2 text-sm font-medium dark:border-transparent dark:text-neutral-200"
                          >
                            {slot}
                          </Link>
                        </Fragment>
                      ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-2 text-center text-xs sm:text-right">
        <a
          target="_blank"
          className="text-gray-500 opacity-50 hover:opacity-100 dark:text-white"
          href="www.google.com"
        >
          powered by Milan Thapa
        </a>
      </div>
    </div>
  );
};

export default EventSchedule;
