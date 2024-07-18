const BlogSection = () => {
  return (
    <section className="w-full px-0 lg:px-0 bg-gray-200 py-8 sm:py-16 xl:px-0">
      <div className="max-w-6xl xl:max-w-7xl xxl:max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 xl:gap-6 px-0 sm:px-4 xl:px-0">
          <div className="blogs col-span-1 sm:col-span-3">
            {/* --------- BLOG 1 ---------  */}
            <div className="blog_1 mb-10 py-10 px-3 sm:px-6 bg-white">
              {/* --------- CONTENT --------- */}
              <div className="content text-center">
                <h3 className="text-sm sm:text-lg italic font-medium tracking-wide text-gray-500 mb-3">
                  FRONT PAGE SLIDESHOW, PHOTOGRAPHY
                </h3>
                <h3 className="text-3xl sm:text-4xl mb-3 font-semibold">
                  A TIMELY PHOTOSHOOTING IN NATURE
                </h3>
                <h3 className="text-sm sm:text-lg text-gray-600 mb-3 tracking-wider">
                  MARCH 13, 2016 BY AMORY NO COMMENTS
                </h3>
              </div>

              {/* --------- IMAGE --------- */}
              <div className="img_cont my-6 w-full">
                <img
                  className="h-[50vh] sm:h-[60vh] w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/gallery-post-2.jpg?v=1721330707"
                  alt="blog"
                />
              </div>

              {/* --------- DESCRIPTION --------- */}
              <div className="desc pt-4">
                <p className="pb-5 text-md sm:text-lg font-medium text-gray-600 tracking-wide">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit esse
                  molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsanet iusto odio dignissim qui
                  blandit praesent. Nam liber tempor cum soluta nobis eleifend
                  option congue nihil imperdiet doming id quod mazim placerat
                  facer possim assum.
                </p>

                <p className="pb-5 text-md sm:text-lg font-medium text-gray-600 tracking-wide">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Typi non habent
                  claritatem insitam; est usus legentis in iis qui facit
                </p>
              </div>

              <div className="button_cont w-full text-center mt-3">
                <button className="border border-black px-10 py-3 text-sm tracking-wider font-semibold hover:bg-white hover:text-black transition-colors duration-500">
                  CONTINUE READING
                </button>
              </div>
            </div>
            {/* --------- BLOG 2 ---------  */}
            <div className="blog_1 mb-10 py-10 px-3 sm:px-6 bg-white">
              {/* --------- CONTENT --------- */}
              <div className="content text-center">
                <h3 className="text-sm sm:text-lg italic font-medium tracking-wide text-gray-500 mb-3">
                  FRONT PAGE SLIDESHOW, PHOTOGRAPHY
                </h3>
                <h3 className="text-3xl sm:text-4xl mb-3 font-semibold">
                  A TIMELY PHOTOSHOOTING IN NATURE
                </h3>
                <h3 className="text-sm sm:text-lg text-gray-600 mb-3 tracking-wider">
                  MARCH 13, 2016 BY AMORY NO COMMENTS
                </h3>
              </div>

              {/* --------- IMAGE --------- */}
              <div className="img_cont my-6 w-full">
                <img
                  className="h-[50vh] sm:h-[60vh] w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/slideshow-post-3.jpg?v=1721330707"
                  alt="blog"
                />
              </div>

              {/* --------- DESCRIPTION --------- */}
              <div className="desc pt-4">
                <p className="pb-5 text-md sm:text-lg font-medium text-gray-600 tracking-wide">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit esse
                  molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsanet iusto odio dignissim qui
                  blandit praesent. Nam liber tempor cum soluta nobis eleifend
                  option congue nihil imperdiet doming id quod mazim placerat
                  facer possim assum.
                </p>

                <p className="pb-5 text-md sm:text-lg font-medium text-gray-600 tracking-wide">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Typi non habent
                  claritatem insitam; est usus legentis in iis qui facit
                </p>
              </div>

              <div className="button_cont w-full text-center mt-3">
                <button className="border border-black px-10 py-3 text-sm tracking-wider font-semibold hover:bg-white hover:text-black transition-colors duration-500">
                  CONTINUE READING
                </button>
              </div>
            </div>
            {/* --------- BLOG 3 ---------  */}
            <div className="blog_1 mb-10 py-10 px-3 sm:px-6 bg-white">
              {/* --------- CONTENT --------- */}
              <div className="content text-center">
                <h3 className="text-sm sm:text-lg italic font-medium tracking-wide text-gray-500 mb-3">
                  FRONT PAGE SLIDESHOW, PHOTOGRAPHY
                </h3>
                <h3 className="text-3xl sm:text-4xl mb-3 font-semibold">
                  A TIMELY PHOTOSHOOTING IN NATURE
                </h3>
                <h3 className="text-sm sm:text-lg text-gray-600 mb-3 tracking-wider">
                  MARCH 13, 2016 BY AMORY NO COMMENTS
                </h3>
              </div>

              {/* --------- IMAGE --------- */}
              <div className="img_cont my-6 w-full">
                <img
                  className="h-[50vh] sm:h-[60vh] w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/18.jpg?v=1721330707"
                  alt="blog"
                />
              </div>

              {/* --------- DESCRIPTION --------- */}
              <div className="desc pt-4">
                <p className="pb-5 text-md sm:text-lg font-medium text-gray-600 tracking-wide">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit esse
                  molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsanet iusto odio dignissim qui
                  blandit praesent. Nam liber tempor cum soluta nobis eleifend
                  option congue nihil imperdiet doming id quod mazim placerat
                  facer possim assum.
                </p>

                <p className="pb-5 text-md sm:text-lg font-medium text-gray-600 tracking-wide">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Typi non habent
                  claritatem insitam; est usus legentis in iis qui facit
                </p>
              </div>

              <div className="button_cont w-full text-center mt-3">
                <button className="border border-black px-10 py-3 text-sm tracking-wider font-semibold hover:bg-white hover:text-black transition-colors duration-500">
                  CONTINUE READING
                </button>
              </div>
            </div>
          </div>
          <div className="about w-full col-span-1">
            {/* --------- ABOUT US ---------  */}
            <div className="about_me  mb-10 py-8 px-6 bg-white">
              <div className="content">
                <h3 className="mb-2 text-xl font-semibold">ABOUT ME</h3>
                <img
                  className="w-full"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/amory-about-us-avatar.jpg?v=1721331170"
                  alt="aboutme_image"
                />

                <p className="py-5 text-md sm:text-md font-medium text-gray-600 tracking-wide">
                  Hello, my name is Amory. I am a blogger living in New York.
                  This is my blog, where I post my photos, fashion trends and
                  tips about the fashion world. Never miss out on new stuff.
                </p>
              </div>
            </div>

            {/* --------- POPULAR BLOGS ---------  */}
            <div className="about_me lg:sticky lg:top-0 mb-10 px-2 py-8 bg-white">
              <div className="content">
                <h3 className="mb-2 px-2 text-xl font-semibold">
                  POPULAR POSTS
                </h3>
                <div className="blogs_list">
                  <div className="blog_box hover:bg-gray-200 cursor-pointer py-2 xl:py-5 px-2 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2">
                    <div className="blog_img">
                      <img
                        className="object-cover h-full"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/slideshow-post-3.jpg?v=1721330707"
                        alt=""
                      />
                    </div>
                    <div className="blog_details py-1 xl:py-2">
                      <h3 className="text-sm font-medium">
                        LOVELY SEVENTIES STYLE IS BACK AGAIN
                      </h3>
                      <p className="text-gray-600">May 23, 2014</p>
                    </div>
                  </div>

                  <div className="blog_box hover:bg-gray-200 cursor-pointer py-5 px-2 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2">
                    <div className="blog_img">
                      <img
                        className="object-cover h-full"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/slideshow-post-3.jpg?v=1721330707"
                        alt=""
                      />
                    </div>
                    <div className="blog_details py-2">
                      <h3 className="text-sm font-medium">
                        LOVELY SEVENTIES STYLE IS BACK AGAIN
                      </h3>
                      <p className="text-gray-600">May 23, 2014</p>
                    </div>
                  </div>

                  <div className="blog_box hover:bg-gray-200 cursor-pointer py-5 px-2 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2">
                    <div className="blog_img">
                      <img
                        className="object-cover h-full"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/slideshow-post-3.jpg?v=1721330707"
                        alt=""
                      />
                    </div>
                    <div className="blog_details py-2">
                      <h3 className="text-sm font-medium">
                        LOVELY SEVENTIES STYLE IS BACK AGAIN
                      </h3>
                      <p className="text-gray-600">May 23, 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
