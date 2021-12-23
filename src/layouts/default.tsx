type DefaultLayoutProps = {
  title: string;
  children: ReactNode;
};

import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | pharmer</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default DefaultLayout;
