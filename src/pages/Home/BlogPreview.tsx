import React from "react";
import BlogOne from "../../assets/blogone.png";
import BlogTwo from "../../assets/blogtwo.png";
import BlogThree from "../../assets/blogthree.png";

const BlogPreview: React.FC = () => {
  return (
    <section className="py-6 sm:py-1 dark:text-white">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 border-l-4 border-uptickblue20 text-left">
          <p className="font-light text-4xl">Blog</p>
          <h2 className="text-6xl font-semibold">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt="Blog One"
                className="object-cover w-full p-4 h-52"
                src={BlogOne}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                Te nulla oportere reprimique his dolorum
              </h3>
              <p className="font-light text-gray-400 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                aut tempore amet explicabo sequi adipisci itaque qui deserunt
                aspernatur? Dolorum?
              </p>
              <div className="pt-3 space-x-2 text-xs dark:text-gray-400">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="text-xs tracki uppercase hover:underline dark:text-uptickblue20">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt="Blog Two"
                className="object-cover w-full h-52 p-4"
                src={BlogTwo}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                Te nulla oportere reprimique his dolorum
              </h3>
              <p className="font-light text-gray-400 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                aut tempore amet explicabo sequi adipisci itaque qui deserunt
                aspernatur? Dolorum?
              </p>
              <div className="pt-3 space-x-2 text-xs dark:text-gray-400">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="text-xs tracki uppercase hover:underline dark:text-uptickblue20">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt="Blog Three"
                className="object-cover w-full h-52 p-4"
                src={BlogThree}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                Te nulla oportere reprimique his dolorum
              </h3>
              <p className="font-light text-gray-400 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                aut tempore amet explicabo sequi adipisci itaque qui deserunt
                aspernatur? Dolorum?
              </p>
              <div className="pt-3 space-x-2 text-xs dark:text-gray-400">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="text-xs tracki uppercase hover:underline dark:text-uptickblue20">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 p-4"
                src="/blogone.png"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                Te nulla oportere reprimique his dolorum
              </h3>
              <p className="font-light text-gray-400 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                aut tempore amet explicabo sequi adipisci itaque qui deserunt
                aspernatur? Dolorum?
              </p>
              <div className="pt-3 space-x-2 text-xs dark:text-gray-400">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="text-xs tracki uppercase hover:underline dark:text-uptickblue20">
                  Read More
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
