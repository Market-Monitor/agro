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

        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b text-xl text-gray-900">
              <th className="w-1/12 py-2">#</th>
              <th className="w-full py-2">Vegetable / Fruit</th>
              <th className="w-1/6 py-2">Current Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => (
              <tr
              role="button"
                key={index}
                className="hover:bg-emerald-500 hover:text-white text-center text-gray-800 first:rounded-tl-lg first:rounded-bl-lg"
              >
                <td className="py-3">{index + 1}</td>
                <td className="py-3">{x.name}</td>
                <td className="py-3">&#8369; {x.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestPriceList;
