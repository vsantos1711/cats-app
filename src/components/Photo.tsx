import Image from "next/image";
import catOne from "../assets/img/cat-one.jpg";
import catTwo from "../assets/img/cat-two.jpg";
import catThree from "../assets/img/cat-three.jpg";
import catFour from "../assets/img/cat-four.jpg";
import catFive from "../assets/img/cat-five.jpg";
import catSix from "../assets/img/cat-six.jpg";
// import catSeven from "../assets/img/cat-seven.jpg";
// import catEight from "../assets/img/cat-eight.jpg";
// import catNine from "../assets/img/cat-nine.jpg";
// import catTen from "../assets/img/cat-ten.jpg";
// import catEleven from "../assets/img/cat-eleven.jpg";
// import catTwelve from "../assets/img/cat-twelve.jpg";

export default function Photo() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <div className="relative w-full min-h-60 ">
        <Image
          src={catOne}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105  dark:border-none shadow-lg"
        />
      </div>

      <div className="relative w-full min-h-60 ">
        <Image
          src={catTwo}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105  dark:border-none shadow-lg"
        />
      </div>

      <div className="relative w-full min-h-60 md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-4">
        <Image
          src={catThree}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105  dark:border-none shadow-lg"
        />
      </div>

      <div className="relative w-full min-h-60 ">
        <Image
          src={catFour}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105  dark:border-none shadow-lg"
        />
      </div>
      <div className="relative w-full min-h-60 ">
        <Image
          src={catFive}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105  dark:border-none shadow-lg"
        />
      </div>
      <div className="relative w-full min-h-60 ">
        <Image
          src={catSix}
          alt="a cat image"
          fill
          className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-105  dark:border-none shadow-lg"
        />
      </div>
    </div>
  );
}
