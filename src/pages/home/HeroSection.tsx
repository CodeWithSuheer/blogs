import "./HomePage.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero_section w-full px-4 lg:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="content flex justify-between items-center min-h-[80vh] lg:min-h-screen">
            <div className="text-white max-w-lg">
              <h1 className="mb-6 text-4xl xl:text-6xl font-medium tracking-wide leading-none">
                A TIMELY PHOTOSHOOTING IN NATURE
              </h1>

              <button className="border border-white px-10 py-3 text-sm tracking-wider font-semibold hover:bg-white hover:text-black transition-colors duration-500">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
