import { useRouter } from "next/dist/client/router";
import DefaultLayout from "../../layouts/default";
import GoodsHeader from "./header";

const GoodsPage = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <DefaultLayout title="Nateng Good">
      <div className="mx-auto w-5/6 py-12">
        <p className="text-gray-800 tracking-wide text-sm">
          Home &gt; market &gt; {slug}
        </p>

        <GoodsHeader />
      </div>
    </DefaultLayout>
  );
};

export default GoodsPage;
