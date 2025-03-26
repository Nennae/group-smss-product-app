import {
  FaTablet,
  FaTshirt,
  FaChair,
  FaShower,
  FaGlasses,
  FaCarSide,
} from "react-icons/fa";
import CategoryBtn from "./category-btn";

export default function CategoryBar() {
  return (
    <section className="flex flex-col items-center text-left gap-8 md:gap-10 lg:gap-12 w-full">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 self-start">
          <div className="bg-red-400 w-2 h-5 md:h-6 lg:h-7 rounded-xs"></div>
          <h2 className="text-red-400 text-lg md:text-xl lg:text-2xl">
            Categories
          </h2>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
          Browse By Category
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 place-items-center justify-center w-full max-w-4xl">
        <CategoryBtn categoryName="Technology" icon={<FaTablet />} />
        <CategoryBtn categoryName="Clothing" icon={<FaTshirt />} />
        <CategoryBtn categoryName="Home" icon={<FaChair />} />
        <CategoryBtn categoryName="Beauty" icon={<FaShower />} />
        <CategoryBtn categoryName="Accessories" icon={<FaGlasses />} />
        <CategoryBtn categoryName="Vehicles" icon={<FaCarSide />} />
      </div>
    </section>
  );
}
