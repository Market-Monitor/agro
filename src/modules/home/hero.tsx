import Image from "next/image";
import HeroImg from "./showcase.svg";

const IndexHero = () => {
  return (
    <div className="pt-32 pb-40 relative">
      <div className="absolute h-96 w-96 -bottom-4 right-12 z-20">
        <Image src={HeroImg} layout="fill" alt="" />
      </div>

      <div className="w-5/6 mx-auto text-left z-30">
        <h1 className="text-5xl tracking-wide font-bold leading-snug text-coolGray-800">
          <span className="text-6xl text-emerald-500 font-black uppercase">
            Real-Time
          </span>
          <br />
          Market Prices for
          <br /> Vegetables, Fruits and <br />
          other goods
        </h1>

        <div className="w-1/2 mr-auto mt-8">
          <form>
            <div className="flex items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="search for a vegetable, fruit..."
                className="border w-full py-2 px-4 border-gray-300 focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="py-2 px-8 ml-2 bg-emerald-500 opacity-80 hover:opacity-100 text-white border border-emerald-500"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexHero;
