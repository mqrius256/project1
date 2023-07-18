import Image from "next/image";
import Header from "./components/Header";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Form1 from "./components/Form1";
import Form2 from "./components/Content/Form2";
import Form3 from "./components/Content/Form3";
import Form4 from "./components/Content/Form4";
import Form5 from "./components/Content/Form5";
import Form6 from "./components/Content/Form6";
import Form7 from "./components/Content/Form7";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <Form6 />
      <Form7 />
      <Footer />
    </main>
  );
}
