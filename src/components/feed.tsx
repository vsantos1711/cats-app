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
  const itemsPageOne = [
    {
      url: catOne,
      views: "123123",
      variant: "top-right",
    },
    {
      url: catTwo,
      views: "2387",
    },
    {
      url: catThree,
      views: "2387",
    },
    {
      url: catFour,
      views: "523523",
    },
    {
      url: catFive,
      views: "4242",
    },
    {
      url: catSix,
      views: "234234",
    },
  ];
  const itemsPageTwo = [
    {
      url: catSeven,
      views: "24234",
      variant: "top-right",
    },
    {
      url: catEight,
      views: "23465234",
    },
    {
      url: catNine,
      views: "1463263",
    },
    {
      url: catTen,
      views: "234234",
    },
    {
      url: catEight,
      views: "23465234",
    },
    {
      url: catNine,
      views: "1463263",
    },
    {
      url: catTen,
      views: "234234",
    },
  ];
  return (
    <main className="container flex flex-col max-w-screen-xl gap-4 pt-2 ">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {itemsPageOne.map((item: any, index) => (
          <Photo
            key={index}
            url={item.url}
            views={item.views}
            variant={item.variant}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {itemsPageTwo.map((item: any, index) => (
          <Photo
            key={index}
            url={item.url}
            views={item.views}
            variant={item.variant}
          />
        ))}
      </div>
    </main>
  );
}
