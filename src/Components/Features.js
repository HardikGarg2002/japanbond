import React from "react";
// import item1 from "../images/head-1.png";
import eco from "../images/eco.jpg";
// import mii from "../images/mii.jpg";
import mki from "../images/mki.jpg";
import tem from "../images/ter.jpg";
import water from "../images/water.jpg";

const Features = () => {
  return (
    <div id="features">
      <div class="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
              <p class="text-base leading-6 text-indigo-500 font-semibold uppercase">
                Japan-Bond
              </p>
              <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                A Adhesive Manufacturer,Known For Its Quality
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Why Choose Us
              </p>
              <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Make In India
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Eco-Friendly
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Water Proof
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Terminator Proof
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div class="relative space-y-4">
                <div class="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    class="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src={mki}
                    alt="1"
                  />
                  <div className="feath">
                    <img
                      class="rounded-lg shadow-lg w-40 md:w-64"
                      width="200"
                      src={tem}
                      alt="2"
                    />
                  </div>
                </div>
                <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                  <img
                    class="rounded-lg shadow-lg w-24 md:w-40"
                    width="170"
                    src={eco}
                    alt="3"
                  />
                  <img
                    class="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src={water}
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Snowflakes.destroy();
export default Features;
