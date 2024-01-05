import Photo from "./Photo";
import catOne from "../assets/img/cat-one.jpg";
import catTwo from "../assets/img/cat-two.jpg";
import catThree from "../assets/img/cat-three.jpg";
import catFour from "../assets/img/cat-four.jpg";
import catFive from "../assets/img/cat-five.jpg";
import catSix from "../assets/img/cat-six.jpg";
import catSeven from "../assets/img/cat-seven.jpg";
import catEight from "../assets/img/cat-eight.jpg";
import catNine from "../assets/img/cat-nine.jpg";
import catTen from "../assets/img/cat-ten.jpg";

export default function Feed() {
  return (
    <main className="container flex flex-col gap-4 pt-2">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
        <Photo url={catOne} views="123123" />
        <Photo url={catTwo} views="2387" />
        <Photo url={catFive} views="4242" />
        <Photo url={catTwo} views="235" />
        <Photo url={catFour} views="523523" />
        <Photo url={catNine} variant="xg-bot-right" views="1463263" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
        <Photo url={catSeven} views="24234" />
        <Photo url={catEight} views="23465234" />
        <Photo url={catTen} views="234234" />
        <Photo url={catTen} views="2387" />
        <Photo url={catThree} variant="xg-top-left" views="2387" />
        <Photo url={catTen} views="134143" />
      </div>
    </main>
  );
}
