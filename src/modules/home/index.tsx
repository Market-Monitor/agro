import DefaultLayout from "../../layouts/default";
import IndexHero from "./hero";
import LatestPriceList from "./price-list";

const IndexPage = () => {
  return (
    <DefaultLayout title="Welcome">
      <IndexHero />

      <hr className="border-teal-200" />

      <LatestPriceList />
    </DefaultLayout>
  );
};

export default IndexPage;
