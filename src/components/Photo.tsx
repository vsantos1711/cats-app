import Image from "next/image";
import catOne from "../assets/imgs/cat-one.jpg";
import catTwo from "../assets/imgs/cat-two.jpg";
import catThree from "../assets/imgs/cat-three.jpg";
import catFour from "../assets/imgs/cat-four.jpg";
import catFive from "../assets/imgs/cat-five.jpg";
import catSix from "../assets/imgs/cat-six.jpg";
import catSeven from "../assets/imgs/cat-seven.jpg";
import catEight from "../assets/imgs/cat-eight.jpg";
import catNine from "../assets/imgs/cat-nine.jpg";
import catTen from "../assets/imgs/cat-ten.jpg";
import catEleven from "../assets/imgs/cat-eleven.jpg";
import catTwelve from "../assets/imgs/cat-twelve.jpg";

export default function Photo() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <div className="relative w-full min-h-60 ">
        <Image
          src={catOne}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105 border dark:border-none shadow-lg"
        />
      </div>

      <div className="relative w-full min-h-60 ">
        <Image
          src={catTwo}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105 border dark:border-none shadow-lg"
        />
      </div>

      <div className="relative w-full min-h-60 md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-4">
        <Image
          src={catThree}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105 border dark:border-none shadow-lg"
        />
      </div>

      <div className="relative w-full min-h-60 ">
        <Image
          src={catFour}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105 border dark:border-none shadow-lg"
        />
      </div>
      <div className="relative w-full min-h-60 ">
        <Image
          src={catFive}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105 border dark:border-none shadow-lg"
        />
      </div>
      <div className="relative w-full min-h-60 ">
        <Image
          src={catSix}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105 border dark:border-none shadow-lg"
        />
      </div>
    </div>
  );
}
