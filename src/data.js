import { colors } from "./styles/vars.json";

const data = {

  // TODO: don't have a default true item, but run search on render load
  nav: [
    {
      name: "about",
      active: true,
      titleText: `Hi, I'm \n Adam Wagner.`,
      copyText: `I'm a Product Manager & Designer with more than a decade of experience designing effective product experiences—leading products through concept development, prototyping, visual design and execution.`
    },
    {
      name: "work",
      active: false,
      titleText: `Case studies \n ↳`,
      copyText: `Although I've built some consumer-focsed side projects, I'm most passionate about improving the nature of work. You'll find a healthy selection of products aimed at small business owners, designers, and musicians.`
    },
    // {
    //   name: "experience",
    //   active: false,
    //   titleText: `Let's work together.`
    // },
    {
      name: "contact",
      active: false,
      titleText: `Let's work together.`,
      copyText: `Let's make your idea a reality. Let's see it move. See it function. It'll be beautiful.`
    },
    // {
    //   name: "experiments",
    //   active: false
    // }
  ],
  projects: [
    {
      title: "Book the bar with OpenTable",
      description: `Offers guests a unique dining experience at hot restaurants, and increases the value of bar seats for restaurant owners.`,
      hero: "/images/opentable-hero.jpg",
      bgColor: colors.red,
      path: "/opentable/"
    },
    {
      title: "Copilot",
      description: `Empowers restaurant owners to make data-driven revenue management decisions.`,
      hero: "/images/copilot-hero.jpg",
      bgColor: '#28a4bd',
      path: "/copilot/"
    },
    {
      title: "Sounds Just Like",
      description: `Satisfies the nagging feeling that you've heard a song before via a database of 50,000 soundalikes submitted by music fans.`,
      hero: "/images/sjl-hero-2.jpg",
      bgColor: "#FFE086",
      path: "/sounds-just-like/"
    },
    {
      title: "Bad Racket",
      description: `Invites musicians to produce their best work in a natural performance and recording space.`,
      hero: "/images/badracket-hero2.jpg",
      bgColor: "#E05952",
      // bgColor: "white",
      path: "/badracket/"
    },
  ]
};

export default data;
