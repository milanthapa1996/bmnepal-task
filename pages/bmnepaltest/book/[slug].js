import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

const Book = () => {
  const router = useRouter();
  const value = router.query;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/success",
      query: { value, name, email },
    });
  };

  const tConv24 = (time24) => {
    var ts = time24 || "00:00";
    var H = +ts.substr(0, 2);
    var h = H % 12 || 12;
    h = h < 10 ? "0" + h : h;
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Book Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto sm:py-24 max-w-3xl">
        <div className="main overflow-hidden dark:border-1 dark:bg-darkgray-100 bg-white dark:border-darkgray-300 rounded-md sm:border">
          <div className="sm:flex">
            {/* // first card */}
            <div className="sm:dark:border-darkgray-300 dark:text-darkgray-600 flex flex-col px-6 pt-6 pb-0 text-gray-600 sm:w-1/2 sm:border-r sm:pb-6">
              <ul className=""></ul>
              <h2 className="mt-2 break-words text-sm font-medium text-gray-600 dark:text-gray-300">
                Milan Thapa
              </h2>
              <h1 className="font-cal dark:text-darkgray-900 mb-6 break-words text-2xl font-semibold text-gray-900">
                {value.title}
              </h1>
              <div className="dark:text-darkgray-600 flex flex-col space-y-4 text-sm font-medium text-gray-600">
                <div className="dark:text-darkgray-600 mr-6 flex w-full flex-col space-y-2 break-words text-sm text-gray-600">
                  <div className="flex flex-row items-center text-sm font-medium">
                    <img
                      src="https://cal.com/api/app-store/dailyvideo/icon.svg"
                      className="mr-[10px] ml-[2px] h-4 w-4 opacity-70 dark:opacity-100 "
                      alt="Cal Video icon"
                    />
                    <p className="truncate" data-state="closed">
                      Cal Video
                    </p>
                  </div>
                </div>
                <div className="flex flex-nowrap text-sm font-medium dark:text-darkgray-600 text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="min-h-4 min-w-4 mr-[10px] ml-[2px] inline-block mt-[2px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {value.allocatedTime}
                </div>
                <div className="text-green-500 flex items-start text-sm">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-[10px] ml-[2px] mt-[2px] inline-block h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <div className="text-sm font-medium">
                    {value.view === "12hr" ? value.slot : tConv24(value.slot)},{" "}
                    {value.selectedDate}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:w-1/2">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Your name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mb-2 h-9 border b py-2 px-3  placeholder:text-gray-400 hover:border-gray-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-1  dark:placeholder:text-darkgray-600 focus:border-brand dark:border-darkgray-300 dark:text-darkgray-900 block w-full rounded-md border-gray-300 text-sm focus:ring-black disabled:bg-gray-200 disabled:hover:cursor-not-allowed dark:bg-transparent dark:selection:bg-green-500 disabled:dark:text-gray-500"
                      placeholder="John Doe"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="search"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      inputMode="email"
                      name="email"
                      required
                      className="mb-2 h-9 border b py-2 px-3  placeholder:text-gray-400 hover:border-gray-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-1  dark:placeholder:text-darkgray-600 focus:border-brand dark:border-darkgray-300 dark:text-darkgray-900 block w-full rounded-md border-gray-300 text-sm focus:ring-black disabled:bg-gray-200 disabled:hover:cursor-not-allowed dark:bg-transparent dark:selection:bg-green-500 disabled:dark:text-gray-500"
                      placeholder="you@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="notes"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Additional notes
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows="3"
                    className="mb-2 border b py-2 px-3  placeholder:text-gray-400 hover:border-gray-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-1  dark:placeholder:text-darkgray-600 focus:border-brand dark:border-darkgray-300 dark:text-darkgray-900 block w-full rounded-md border-gray-300 text-sm focus:ring-black disabled:bg-gray-200 disabled:hover:cursor-not-allowed dark:bg-transparent dark:selection:bg-green-500 disabled:dark:text-gray-500"
                    placeholder="Please share anything that will help prepare for our meeting."
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-2 rtl:space-x-reverse">
                  <button
                    tooltip="Add guests"
                    className="items-center text-sm font-medium relative rounded-md transition-colors text-gray-900 dark:text-darkgray-900 flex justify-center min-h-[36px] min-w-[36px]  mr-auto"
                    type="button"
                    data-state="closed"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline-flex h-4 w-4 "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                  </button>
                  <Link href={"/"}>
                    <button
                      className="inline-flex items-center text-sm font-medium relative rounded-md transition-colors text-gray-900 dark:text-darkgray-900 h-9 px-4 py-2.5  dark:hover:bg-darkgray-200 dark:border-none dark:text-white"
                      type="button"
                    >
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="inline-flex items-center text-sm font-medium relative rounded-md transition-colors text-white dark:text-black h-9 px-4 py-2.5  bg-brand-500 hover:bg-brand-400 focus:border focus:border-white focus:outline-none focus:ring-2 focus:ring-offset focus:ring-brand-500 dark:hover:bg-darkgray-600 dark:bg-darkgray-900 bg-black"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
            {/* // second card */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;
