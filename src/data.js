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
      copyText: `I'm passionate about what makes work work. I love building products that make small business life better and make marketplaces richer. For a different flavor, check out my side-projects, which focus on music creation and the common DNA shared by many songs.`
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
      copyText: `I'll wager you have some critical user flows that keep getting pushed on to the backburner. \n I understand. But that’s where I come in. Let’s talk!`
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
      hero: "/images/sjl-hero.jpg",
      bgColor: "#FFE086",
      path: "/sounds-just-like/"
    },
    {
      title: "Bad Racket",
      description: `Invites musicians to produce their best work in a natural performance and recording space.`,
      hero: "/images/badracket-hero2.jpg",
      bgColor: colors.red,
      // bgColor: "white",
      path: "/badracket/"
    },
  ]
};

export default data;
