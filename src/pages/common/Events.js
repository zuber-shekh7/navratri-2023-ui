import React from "react";

const Events = () => {
  return (
    <section className="w-10/12 mx-auto">
      <div className="mb-12 mt-6">
        <div className="mt-12 mb-6">
          <h1 className="text-center font-bold text-2xl lg:text-4xl uppercase bg-gray">
            Events
          </h1>
        </div>
        <div className="border my-6"></div>
        <div className="flex flex-wrap justify-around gap-y-12 gap-x-2">
          {new Array(9).fill("").map((item) => {
            return (
              <div className="bg-gray-100 w-11/12 md:w-5/12 lg:w-3/12 rounded-xl shadow-lg border border-transparent hover:shadow-xl hover:cursor-pointer hover:border hover:bg-yellow-400 transition-all ease-in-out">
                <img
                  className="h-48 w-full object-cover rounded-t-xl"
                  src="https://imgk.timesnownews.com/story/navratrigarbapti.jpg?tr=w-1200,h-900"
                />
                <div className="ml-5 mb-6">
                  <h4 className="text-2xl font-bold my-5">Event 1</h4>
                  <div className="flex flex-col gap-y-4">
                    <p className="text-ellipsis">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga nobis itaque perspiciatis deserunt harum voluptatibus
                      magnam libero doloremque natus sapiente sunt ullam sequi
                      corporis eos dicta iure, vero quo velit.
                    </p>
                    <small className="text-lg font-semibold">24/10/2023</small>
                    <small className="text-lg font-semibold">
                      Starts @ 8:00PM Onwards
                    </small>
                    <small className="text-lg font-medium">Bilimora</small>
                    <div className="flex mr-5">
                      <button className="bg-blue-500 text-2xl px-5 py-2 rounded-lg mt-5 text-white w-full shadow-lg hover:bg-blue-600">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
