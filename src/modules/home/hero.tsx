import Image from "next/image";
import HeroImg from "./showcase.svg";

const IndexHero = () => {
  return (
    <div className="pt-32 pb-44 relative">
      <div className="absolute h-96 w-96 -bottom-4 right-12 z-20">
        <Image src={HeroImg} layout="fill" alt="" />
      </div>

      <div className="w-5/6 mx-auto text-left z-30">
        <h1 className="text-6xl tracking-wide font-bold leading-snug text-neutral-800">
          <span className="text-7xl text-emerald-500 font-black uppercase">
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
                className="border rounded-lg w-full py-3 px-4 border-neutral-300 focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="py-3 px-8 rounded-lg ml-2 bg-emerald-500 opacity-80 hover:opacity-100 text-white border border-emerald-500"
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
