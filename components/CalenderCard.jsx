import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  endOfWeek,
} from "date-fns";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CalenderCard({setOpen,setSelectedDate}) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <>
      <div className="mb-4 flex justify-between text-xl font-light">
        <span className="w-1/2 dark:text-white">
          <strong className="text-gray-800 text-base font-semibold dark:text-white">
            {format(firstDayCurrentMonth, "MMMM")}
          </strong>
          <span className="text-gray-400 text-sm font-medium">
            &nbsp;
            {format(firstDayCurrentMonth, "yyyy")}
          </span>
        </span>
        <button
          type="button"
          onClick={previousMonth}
          className="group p-1 opacity-50 hover:opacity-100 ltr:mr-2 rtl:ml-2"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={nextMonth}
          type="button"
          className="group p-1 opacity-50 hover:opacity-100"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <div className="border-gray-400 mb-2 grid grid-cols-7 gap-4 border-t border-b text-center dark:border-neutral-900 md:mb-0 md:border-0">
        <div className="text-gray-400 dark:text-darkgray-900 my-4 text-sm uppercase tracking-widest">
          SUN
        </div>
        <div className="text-gray-400 dark:text-darkgray-900 my-4 text-sm uppercase tracking-widest">
          MON
        </div>
        <div className="text-gray-400 dark:text-darkgray-900 my-4 text-sm uppercase tracking-widest">
          TUE
        </div>
        <div className="text-gray-400 dark:text-darkgray-900 my-4 text-sm uppercase tracking-widest">
          WED
        </div>
        <div className="text-gray-400 dark:text-darkgray-900 my-4 text-sm uppercase tracking-widest">
          THU
        </div>
        <div className="text-gray-400 dark:text-darkgray-900 my-4 text-sm uppercase tracking-widest">
          FRI
        </div>
        <div className="text-gray-400 dark:text-darkgray-900 my-4 text-sm uppercase tracking-widest">
          SAT
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "relative w-full pt-[100%]"
            )}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedDay(day)
                setOpen(true)
                setSelectedDate(day)
              }}
              className={classNames(
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-900",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, selectedDay) && "bg-gray-900",
                isEqual(day,endOfWeek(today)) &&"text-red-500",
                !isEqual(day, selectedDay) &&
                  "hover:bg-gray-300 hover:text-white",
                "absolute top-0 left-0 right-0 bottom-0 mx-auto w-full rounded-md border-2 border-transparent text-center font-medium disabled:cursor-default disabled:border-transparent disabled:font-light disabled:dark:border-transparent dark:bg-darkgray-200 bg-gray-100 hover:bg-gray-300 "
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
