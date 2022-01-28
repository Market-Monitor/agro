import data from "./data.json";

const LatestPriceList = () => {
  return (
    <div className="py-16">
      <div className="w-4/5 mx-auto shadow-2xl py-6 px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="leading-loose text-3xl font-extrabold text-emerald-500">
            Top Prices
          </h3>
          <p className="text-neutral-400">{new Date().toLocaleString()}</p>
        </div>

        <div className="w-full">
          <div>
            <ul className="flex items-center justify-between text-gray-700 px-4 font-bold">
              <li className="">No. #</li>
              <li className="">Name</li>
              <li className="">Current Price</li>
            </ul>
          </div>
          <div className="mt-2">
            {data.map((x, index) => (
              <a
                href="#"
                role="button"
                key={index}
                className="flex items-center justify-between group px-4 py-2 my-1 rounded-lg bg-gray-100 hover:bg-emerald-500 hover:text-white text-center text-gray-800 text-sm"
              >
                <div className="text-gray-500">{index + 1}</div>
                <div className="text-gray-800 w-1/4 truncate">{x.name}</div>
                <div className="font-bold tracking-wide text-emerald-500 group-hover:text-white text-lg">
                  &#8369; {x.price}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPriceList;
