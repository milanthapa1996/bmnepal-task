import React from "react";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  const value = router.query;
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mx-auto max-w-3xl">
        <div className="overflow-y-auto z-50 ">
          <div className="text-center flex items-end justify-center px-4 pt-4 pb-20  sm:block sm:p-0">
            <div className="my-4 transition-opacity sm:my-0  inset-0">
              <div className="main inline-block transform overflow-hidden rounded-lg border sm:my-8 sm:max-w-xl dark:bg-darkgray-100 bg-white dark:border-neutral-700 px-8 pt-5 pb-4 text-left align-bottom transition-all sm:w-full sm:py-8 sm:align-middle">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-green-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="mt-6 mb-8 text-center last:mb-0">
                  <h3
                    className="text-2xl font-semibold leading-6 text-neutral-900 dark:text-white"
                    id="modal-headline"
                  >
                    This meeting is scheduled
                  </h3>
                  <div className="mt-3">
                    <p className="text-neutral-600 dark:text-gray-300">
                      We emailed you and the other attendees a calendar
                      invitation with all the details.
                    </p>
                  </div>
                  <div className="border-gray-400 text-bookingdark dark:border-darkgray-300 mt-8 grid grid-cols-3 border-t pt-8 text-left dark:text-gray-300">
                    <div className="font-medium">What</div>
                    <div className="col-span-2 mb-6 last:mb-0">
                      {value.title} between Milan Thapa and Saroj Subedi
                    </div>
                    <div className="font-medium">When</div>
                    <div className="col-span-2 mb-6 last:mb-0">
                      <div className="">
                        {value.selectedDate}
                        <br />
                        10:30am - 10:45am{" "}
                        <span className="text-gray-400">
                          (Asia/Krasnoyarsk)
                        </span>
                      </div>
                    </div>
                    <div className="font-medium">Who</div>
                    <div className="col-span-2 mb-6 last:mb-0">
                      <div className="mb-3">
                        <p>Milan Thapa</p>
                        <p className="text-gray-400">random@gmail.com</p>
                      </div>
                      <div className="mb-3 last:mb-0">
                        <p>{value.name}</p>
                        <p className="text-gray-400">{value.email}</p>
                      </div>
                    </div>
                    <div className="mt-3 font-medium">Where</div>
                    <div className="col-span-2 mt-3">
                      Web conferencing details to follow in the confirmation
                      email.
                    </div>
                    <div className="mt-9 font-medium">Additional notes</div>
                    <div className="col-span-2 mb-2 mt-9">
                      <p>asdf</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;
