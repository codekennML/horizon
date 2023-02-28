import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const blogPosts = [
  {
    id: 1,
    subtitle: "Road Trips",
    title: "Travel",
    body: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    src: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    subtitle: "Life Style",
    title: "Stress & Relaxing",
    body: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    src: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2clMjB0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    subtitle: "Picnics",
    title: "Exploring Nature",
    body: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    src: "https://images.unsplash.com/photo-1566501229621-a8b6e50b0b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw5NTUwMjgzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const Blog = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto">
      <section className="text-gray-600 font-inter">
        <div className=" px-5 py-12 mx-auto">
          <div className="my-4">
            <h2 className="font-gilda text-[25px] lg:text-[40px]">
              Our Latest Guides
            </h2>
          </div>
          <div className="flex flex-wrap -m-4  relative ">
            <div className="absolute -top-4 right-1">
              <button className="text-primary font-inter flex items-center hover:underline space-x-3 hidden lg:block">
                <span className="">All Guides</span>
                <span>
                  <AiOutlineArrowRight className="text-[13px]" />
                </span>
              </button>
            </div>

            {blogPosts.map((post) => {
              return (
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="max-h-[400px] lg:h-48 md:h-36 w-full object-cover object-center"
                      src={post.src}
                      alt={`blog-${post.title}-image`}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {post.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-[12px] lg:text-[16px]">
                        {post.body}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <button className="text-primary inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
