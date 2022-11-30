import React from "react";
import Link from "next/link";

const EventCard = ({ event }) => {
  delete event.id;
  return (
    <>
      <div className="dark:bg-darkgray-100 group relative border-b border-neutral-200 bg-white first:rounded-t-md last:rounded-b-md last:border-b-0 hover:bg-gray-50 dark:border-neutral-700 dark:hover:border-neutral-600">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="absolute right-4 top-4 h-4 w-4 text-black opacity-0 transition-opacity group-hover:opacity-100 dark:text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        <Link
          href={{
            pathname: `${event.slugPath}`,
            query: event,
          }}
          className="block w-full p-5"
        >
          <div className="flex flex-wrap items-center">
            <h2 className="dark:text-darkgray-700 pr-2 text-sm font-semibold text-gray-700">
              {event.title}
            </h2>
          </div>
          <div className="dark:text-darkgray-800 text-neutral-500">
            <ul className="mt-2 flex flex-wrap space-x-2 sm:flex-nowrap">
              <li>
                <div className="inline-flex items-center justify-center py-0.5 px-[6px] text-xs font-normal rounded-md bg-gray-100 text-gray-800 dark:bg-transparent dark:text-darkgray-800">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mr-1 h-3 w-3 stroke-[3px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {event.timeTag}
                </div>
              </li>
              <li>
                <div className="inline-flex items-center justify-center py-0.5 px-[6px] text-xs font-normal rounded-md bg-gray-100 text-gray-800 dark:bg-transparent dark:text-darkgray-800">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mr-1 h-3 w-3 stroke-[3px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  {event.eventType}
                </div>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </>
  );
};

export default EventCard;
