import Image from "next/image";
import Navbar from "./components/Navbar";
import NavBottom from "./components/NavBottom";
import Footer from "./components/Footer";
import PriceSection from "./components/PriceSection";
import Newletter from "./components/Newletter";

export default function Home() {
  return (
    <div
      className="bg-gray-100
    "
    >
      <Navbar />
      <NavBottom />
      <PriceSection />
      <Newletter />
      <Footer />
    </div>
  );
}
