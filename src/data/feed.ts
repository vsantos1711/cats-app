import { PostData } from "@/types/post";

export async function getPosts(): Promise<PostData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      url: "https://cdn2.thecatapi.com/images/dhn.jpg",
      views: "250000",
      author: "Tyrion Lannister",
      catInfos: {
        name: "Viserion",
        age: "1",
        breed: "Dragon Cat",
        weight: "5",
      },
      comments: [
        {
          id: 1,
          author: "Daenerys Targaryen",
          text: "This cat looks like a dragon!",
        },
        {
          id: 2,
          author: "Jon Snow",
          text: "I've never seen a cat like this beyond the Wall.",
        },
        {
          id: 3,
          author: "Arya Stark",
          text: "Valar Morghulis, even for cats.",
        },
        {
          id: 4,
          author: "Daenerys Targaryen",
          text: "This cat looks like a dragon!",
        },
        {
          id: 5,
          author: "Jon Snow",
          text: "I've never seen a cat like this beyond the Wall.",
        },
        {
          id: 6,
          author: "Arya Stark",
          text: "Valar Morghulis, even for cats.",
        },
        {
          id: 5,
          author: "Jon Snow",
          text: "I've never seen a cat like this beyond the Wall.",
        },
        {
          id: 6,
          author: "Arya Stark",
          text: "Valar Morghulis, even for cats.",
        },
        {
          id: 7,
          author: "Jon Snow",
          text: "I've never seen a cat like this beyond the Wall.",
        },
        {
          id: 8,
          author: "Arya Stark",
          text: "Valar Morghulis, even for cats.",
        },
      ],
      variant: "top-right",
    },
    {
      url: "https://cdn2.thecatapi.com/images/46k.jpg",
      views: "45000",
      author: "Sansa Stark",
      catInfos: {
        name: "Ghost",
        age: "3",
        breed: "Direcat",
        weight: "6",
      },
      comments: [
        {
          id: 1,
          author: "Bran Stark",
          text: "I can sense Ghost's presence through this image.",
        },
        {
          id: 2,
          author: "Cersei Lannister",
          text: "An impressive feline, indeed.",
        },
      ],
    },
    {
      url: "https://cdn2.thecatapi.com/images/9pl.jpg",
      views: "18000",
      author: "Khal Drogo",
      catInfos: {
        name: "Khalessi",
        age: "4",
        breed: "Dothrakicat",
        weight: "8",
      },
      comments: [
        {
          id: 1,
          author: "Ser Jorah Mormont",
          text: "Even the cats in Essos are fierce.",
        },
        {
          id: 2,
          author: "Missandei",
          text: "Valar Dohaeris, even for cats.",
        },
      ],
    },
    {
      url: "https://cdn2.thecatapi.com/images/dl2.jpg",
      views: "5000",
      author: "Arya Stark",
      catInfos: {
        name: "Needle",
        age: "2",
        breed: "Facelesscat",
        weight: "4",
      },
      comments: [
        {
          id: 1,
          author: "Hound",
          text: "A cat with no name. I like it.",
        },
      ],
    },
    {
      url: "https://cdn2.thecatapi.com/images/6um.jpg",
      views: "120000",
      author: "Jaime Lannister",
      catInfos: {
        name: "Lionheart",
        age: "5",
        breed: "Lannistercat",
        weight: "7",
      },
      comments: [
        {
          id: 1,
          author: "Tyrion Lannister",
          text: "A cat fit for a Lannister.",
        },
        {
          id: 2,
          author: "Cersei Lannister",
          text: "Lionheart indeed.",
        },
      ],
    },
    {
      url: "https://cdn2.thecatapi.com/images/MTgzODA0OA.jpg",
      views: "8000",
      author: "Night King",
      catInfos: {
        name: "White Walker",
        age: "3",
        breed: "Undeadcat",
        weight: "10",
      },
      comments: [
        {
          id: 1,
          author: "Bran Stark",
          text: "I sense a mysterious aura around this cat.",
        },
        {
          id: 2,
          author: "Jon Snow",
          text: "Is this a cat beyond the Wall?",
        },
      ],
    },
  ];
}
