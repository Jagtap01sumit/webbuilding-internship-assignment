import Image from "next/image";

const cardData = [
  {
    // image ,imgName, boldtext1,text1,boldtext2,text2,cardnum,cardtext
    id: "card-1",
    image: (
      <Image src="./images/img1.png" alt="Image 1" width={300} height={200} />
    ),
    imgName: "Categories",
    boldtext1: "WixPro 72-Inch Responsive Website Builder",
    text1:
      "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    boldtext2: "Main highlights",
    text2:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    cardnum: "9.8",
    cardtext: "Exceptional",
  },
  {
    id: "card-2",
    image: (
      <Image src="./images/img1.png" alt="Image 1" width={300} height={200} />
    ),
    imgName: "Categories",
    boldtext1: "SiteCraft 68-Inch Ultimate Web Design Studio",
    text1:
      "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    boldtext2: "Main highlights",
    text2:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    cardnum: "9.5",
    cardtext: "Excellent",
  },
  {
    id: "card-3",
    image: (
      <Image src="./images/img1.png" alt="Image 1" width={300} height={200} />
    ),
    imgName: "Categories",
    boldtext1: "WixPro 72-Inch Responsive Website Builder",
    text1:
      "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    boldtext2: "Main highlights",
    text2:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    cardnum: "9.3",
    cardtext: "Exceptional",
  },
];

export default cardData;
