import { ReactNode } from "react";
import style from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { poppins, roboto } from "@/utils/fonts";
import Head from "next/head";
import AppHead from "@/utils/AppHead";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${roboto.className} ${style.parent}`}>
     <AppHead/>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
