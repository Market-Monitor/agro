import Image from "next/image";
import ImgGood from "../../assets/cabbage.jpg";

const GoodsHeader = () => {
  return (
    <div className="my-8 p-6 shadow-2xl">
      <div className="flex justify-between">
        <div className="inline-flex items-center">
          <Image
            src={ImgGood}
            alt="Good"
            height="150"
            width="150"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="ml-8">
            <h2 className="text-5xl font-black text-emerald-500">Cabbage</h2>
          </div>
        </div>

        <h4 className="font-black text-4xl text-emerald2">
          &#8369;10 - &#8369;20
        </h4>
      </div>
    </div>
  );
};

export default GoodsHeader;
