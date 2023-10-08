import { M_PLUS_1, Open_Sans } from "next/font/google";

interface TextProps {
  label: string;
  font?: "M Plus" | "Open Sans";
}

const MPlus = M_PLUS_1({
  weight: "400",
  subsets: ["latin"],
});

const OpenSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const Text = ({ label, font }: TextProps) => {
  let fontClass;
  switch (font) {
    case "M Plus":
      fontClass = MPlus.className;
      break;

    case "Open Sans":
      fontClass = OpenSans.className;
      break;

    default:
      break;
  }
  return <h1 className={fontClass}>{label}</h1>;
};
