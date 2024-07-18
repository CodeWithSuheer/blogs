import { Link } from "react-router-dom";
import BottomLine from "./BottomLine";

const Header = () => {
  const handleMoveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="top_bar w-full mx-auto">
        <div className="bg-white py-6 logo_parent w-full mx-auto">
          <Link onClick={handleMoveTop} to="/">
            {/* <img
            className="h-36 mx-auto"
            src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Untitled_design__1_-removebg-preview.png?v=1713916983"
            alt="logo"
            /> */}

            <h2 className="text-center text-5xl sm:text-7xl font-medium tracking-wide mb-1">
              AMORY
            </h2>
          </Link>

          <p className="w-full text-center text-sm sm:text-lg">
            Storyteller from around the Globe
          </p>
        </div>
      </section>

      <BottomLine />
    </>
  );
};

export default Header;
