import { useRouter } from "next/dist/client/router";
import DefaultLayout from "../../layouts/default";
import GoodsHeader from "./header";
import GoodsPriceGraph from "./price-graph";

const GoodsPage = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <DefaultLayout title="Nateng Good">
      <div className="mx-auto w-5/6 p-16 my-8 shadow-2xl bg-white">
        <p className="text-neutral-800 tracking-wide text-sm">
          Home &gt; market &gt; {slug}
        </p>

        <GoodsHeader />

        <GoodsPriceGraph />
      </div>
    </DefaultLayout>
  );
};

export default GoodsPage;
