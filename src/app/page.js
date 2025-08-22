import Image from "next/image";
import Banner from "./components/Banner";
import ProductHighlights from "./components/ProductHighlights";
import ProductHighlights2 from "./components/ProductHighlights2";

export default function Home() {
  return (
    <div>
     
        <Banner></Banner>
        <ProductHighlights></ProductHighlights>
        <ProductHighlights2></ProductHighlights2>
   
    </div>
  );
}
