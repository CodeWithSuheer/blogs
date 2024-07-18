import { Link } from "react-router-dom";

const BottomLine = () => {
  const navigation = [
    { id: 1, title: "Home", path: "" },
    { id: 4, title: "Health", path: "" },
    { id: 3, title: "Haircare", path: "" },
    { id: 2, title: "Skincare", path: "" },
    { id: 5, title: "About", path: "about" },
    { id: 6, title: "Contact", path: "contact" },
  ];

  return (
    <section className="flex flex-wrap justify-center border-y border-black px-3 sm:px-10 py-4 relative">
      <div
        className="flex justify-start items-center overflow-x-scroll sm:overflow-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>
          {`
            .left::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {navigation.map((data) => (
          <ul key={data.id}>
            <li className="max-lg:px-0 max-lg:py-0 text-black bg-white">
              <Link
                className={`heading font-normal text-sm sm:text-[16px] tracking-wider uppercase mr-8 sm:mx-4 block my-0 text-black`}
                to={data.path}
              >
                {data.title}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default BottomLine;
