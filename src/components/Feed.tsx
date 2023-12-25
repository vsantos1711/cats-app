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
    <main className="container flex flex-col gap-4">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <Photo url={catOne} />
        <Photo url={catTwo} />
        <Photo url={catFive} />
        <Photo url={catTwo} />
        <Photo url={catFour} />
        <Photo url={catNine} size="xg-bot-right" />
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <Photo url={catThree} size="xg-top-left" />
        <Photo url={catSeven} />
        <Photo url={catEight} />
        <Photo url={catTen} />
        <Photo url={catSix} />
        <Photo url={catTen} />
      </div>
    </main>
  );
}
