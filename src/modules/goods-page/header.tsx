import Image from "next/image";
import ImgGood from "../../assets/cabbage.jpg";

const GoodsHeader = () => {
  return (
    <div className="my-12">
      <div className="flex justify-between">
        <div className="inline-flex items-center">
          <Image
            src={ImgGood}
            alt="Good"
            height="175"
            width="175"
            objectFit="cover"
          />
          <div className="ml-8">
            <h2 className="text-5xl font-black text-emerald-500">Cabbage</h2>

            <p className="text-lg my-6 text-gray-800">
              No description set yet.
            </p>

            <p className="mt-3 text-gray-600">
              (Price may vary anytime always check the date to compare.)
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-gray-700">{new Date().toLocaleString()}</p>
          <h4 className="font-black text-4xl text-emerald2">
            &#8369;10 - &#8369;20
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GoodsHeader;
